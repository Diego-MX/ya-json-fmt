import * as vscode from "vscode";
import compactBrackets from "./compactBrackets";

let compactBracketsCommand = async function () {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    vscode.window.showErrorMessage("No active editor.");
    return;
  }
  const configEdt = vscode.workspace.getConfiguration(
    "editor",
    editor.document.uri
  );
  const configExt = vscode.workspace.getConfiguration("yajsonfmt");
  const tabSize0 = configEdt.get<number>("tabSize", 2);
  const useTabSizeFromFile = configExt.get<boolean>("tabSizeFromFile", false);

  const tabSize = useTabSizeFromFile
    ? (editor.options.tabSize as number)
    : tabSize0;
  try {
    await configEdt.update(
      "tabSize",
      tabSize,
      vscode.ConfigurationTarget.Workspace
    );
    await vscode.commands.executeCommand("editor.action.formatDocument");
  } finally {
    await configEdt.update(
      "tabSize",
      tabSize0,
      vscode.ConfigurationTarget.Workspace
    );
  }
  const document = editor.document;
  let text = document.getText();
  let transformed = compactBrackets(text, tabSize);
  editor.edit((editBuilder) => {
    const fullRange = new vscode.Range(
      document.positionAt(0),
      document.positionAt(text.length)
    );
    editBuilder.replace(fullRange, transformed);
  });
};

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "yajsonfmt.compactBrackets",
    compactBracketsCommand
  );
  context.subscriptions.push(disposable);
}

export function deactivate() {}
