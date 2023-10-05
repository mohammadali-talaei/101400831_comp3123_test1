const fs = require('fs');
const path = require('path');
const directoryPath = './Logs';

if (fs.existsSync(directoryPath)) {
    console.log('Directory logs exists.');
    const files = fs.readdirSync(directoryPath);
    files.forEach(file => {
        const filePath = path.join(directoryPath, file);
        // Delete the file
        fs.unlinkSync(filePath);
        console.log('Deleted file:', file);
    });
    fs.rmdirSync(directoryPath);
} else {
    console.log('Directory logs does not exist.');
    fs.mkdir(directoryPath, (err) => {
        if (err) {
            console.error('Error creating directory:', err);
        } else {
            console.log('Directory created successfully.');
            try {
                process.chdir(directoryPath);
                console.log(`New directory is set as the current working directory: ${process.cwd()}`);
                
                // Create 10 log files and write some text into each of them
                for (let i = 1; i <= 10; i++) {
                    const logFileName = `log${i}.txt`;
                    const logContent = `This is the content for ${logFileName}`;

                    fs.writeFile(logFileName, logContent, (err) => {
                        if (err) {
                            console.error(`Error writing to ${logFileName}:`, err);
                        } else {
                            console.log(`${logFileName} has been created and written to.`);
                        }
                    });
                }
            } catch (err) {
                console.error('Error changing directory:', err);
            }
        }
    });
}

