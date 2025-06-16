import { createLogger, format, transports } from 'winston';

const logger = createLogger({
    level: 'info',
    format: format.json(),
    transports: [
        new transports.File({ filename: 'error.log', level: 'error' }), // Apenas erros
        new transports.File({ filename: 'combined.log' }), // Info e superiores
    ],
});

export default logger;