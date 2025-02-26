import { commands, window, Range, ExtensionContext } from 'vscode';
import compactBrackets from "./compactBrackets"; 


export function activate(context: ExtensionContext) {	
	let disp_function = function () {
		const editor = window.activeTextEditor; 
		if (!editor) {
			window.showErrorMessage("No active editor.");
			return;
		}
		const document = editor.document; 
		let text = document.getText(); 
		let transformed = compactBrackets(text); 
		editor.edit(editBuilder => {
			const fullRange = new Range(
				document.positionAt(0), 
				document.positionAt(text.length) );
      editBuilder.replace(fullRange, transformed); 
		});
	};

	const disposable = commands.registerCommand(
    'ya-json-fmt.compactBrackets', disp_function);
	context.subscriptions.push(disposable);
}

export function deactivate() {}
