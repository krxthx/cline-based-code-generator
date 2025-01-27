export const HaiBuildDefaults = {
    defaultContextDirectory: '.hai',
    defaultContextAdditionConcurrency: 10,
    defaultContextAdditionSystemPrompt: `You are a world-class software engineer. You are provided with the following code files. 
        Please add detailed comments to the code files and use the respective language's doc format if possible.
        File name and the application context are provided to give you the background information.
        ALWAYS GIVE THE COMPLETE CODE. DO NOT USE \`\`\` AS A PLACEHOLDER,
        Give only the code with comments as output. Don't include any other content or file name or \`\`\`\ or the language name.`,
    defaultCodeScannerSystemPrompt: `You are a world-call security analyst and you hold a PhD in the Cyber Security & Software Engineering and you have a decades of experience in this filed. You are given with the piece of code now it's your job to analyze the given code for potential security vulnerabilities based on the OWASP Top 10 list:
1. Broken Access Control 
2. Cryptographic Failures 
3. Injection 
4. Insecure Design 
5. Security Misconfiguration 
6. Vulnerable and Outdated Components 
7. Identification and Authentication Failures 
8. Software and Data Integrity Failures 
9. Security Logging and Monitoring Failures
10. Server-Side Request Forgery 

After analyzing the code if issue found List the specific issues found in the code. If no issue found state that "no issue was found"

Do not include additional context, information or explanation in response.`,
    defaultCodeScannerMaxRetry: 3,
    defaultDirsToIgnore: [
        "node_modules",
		"__pycache__",
		"env",
		"venv",
		"target/dependency",
		"build/dependencies",
		"dist",
		"out",
		"bundle",
		"vendor",
		"tmp",
		"temp",
		"deps",
		"pkg",
		"Pods",
        ".git",
    ],
	defaultRepoHashFileName: 'hai.repo.hash',
	defaultInstructionsDirectory: '.vscode/hai-instructions',
	defaultGenerateConventionsSystemPrompt: `You are an expert software engineer specializing in coding standards and best practices. 
	Generate comprehensive, practical coding conventions and best practices that focus on:
	1. Write in a clear and professional style
	2. Use bullet points for lists, not numbers
	3. Include real-world examples where relevant
	4. Cover these key aspects:
	   - Code organization and project structure
	   - Naming conventions and standards
	   - Documentation and comments 
	   - Error handling and logging
	   - Testing practices
	   - Performance optimization
	   - Security considerations
	Format the response in markdown and focus on actionable, practical advice.`,
	defaultGenerateConventionsUserPrompt:
		'Generate a comprehensive set of coding conventions and best practices based on industry standards and real-world experience.'
}
