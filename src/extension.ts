import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "vsnotes" is now active!');

	let disposable = vscode.commands.registerCommand('vsnotes.helloWorld', () => {

		vscode.window.showInformationMessage('Hello World from VSNotes!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
