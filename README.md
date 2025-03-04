# yajsonfmt README

Yet another JSON Formatter.  There are many formatter extensions in VSCode Marketplace.  
And yet ... I couldn't find one that allowed me to format mine the way I wanted.  
Since the standard JSON format is very sparse, I wanted to have mine more compact.  

## Features

As of Feb '25, there's only one command -`Compact Brackets`- in this extension.  
I need to look for examples to show what it does, but to some point it would ...  
... 🥁 make brackets more compact.  

A second challenge is to order the keys of dictionaries, so that the user specifies 
the order in which to set them when there are many keys and they're repeated.  

This is it for now, so I'll be happy to come back and make it more readily available.  

> Tip: Many popular extensions utilize animations. This is an excellent way to show off your extension! We recommend short, focused animations that are easy to follow.

## Requirements

Since I just started using Javascript and Typescript for this project, I'm not familiar 
requirements and dependencies.   So I'll just leave that here.  

## Extension Settings

I haven't implemented any configuration options in this package.  
But I do see tab size being an issue for tomorrow.  
Perhaps I'll set it in the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

* `yajsonfmt.tabSizeFromFile`: in order to adjust the file based on its running tab size, 
or according to its default configuration.  

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

Users appreciate release notes as you update your extension.

### 0.2.0

Initial release of YetAnotherJSONformatter.  

---

## Following extension guidelines

I actually haven't read this, and at this point I'm to eager to compile it.  
So I'll leave this for later.  

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

## Working with Markdown

I'm very familiar with Markdown, so I'm going to ignore this.  

**Enjoy!**
