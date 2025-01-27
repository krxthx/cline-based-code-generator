export enum FileOperations { 
    Create, 
    Delete, 
    Change 
}

export const ACCEPTED_FILE_EXTENSIONS = ['md'];

export const INSTRUCTION_TEMPLATE_FILE_NAME = "hai-instructions.md";

export const TOAST_MESSAGES = {
    INSTRUCTION_TEMPLATE: {
        GENERATING: "Generating Instruction File...",
        CREATED: "Custom instructions file generated successfully...",
    },
}