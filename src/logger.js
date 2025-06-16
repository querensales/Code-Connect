import { createLogger, format, transports } from 'winston';

const logger = createLogger({
    level: 'info',
    format: format.json(),
    transports: [
        new transports.File({ filename: 'error.log' }),
        new transports.File({ filename: 'combined.log' }),
    ],
});

export default logger;