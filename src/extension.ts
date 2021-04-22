import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "vsnotes" is now active!');

  context.subscriptions.push(
    vscode.commands.registerCommand("vsnotes.helloWorld", () => {
      vscode.window.showInformationMessage("Hello from VSNotes!");
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("vsnotes.notesQuestion", () => {
      vscode.window.showInformationMessage("Do you like to make notes?", "uhh..sure?", "not really.");
    })
  );
}

export function deactivate() {}
