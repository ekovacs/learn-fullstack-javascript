const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';



export const logStar = function(message) {
  console.info('**************');
  console.info(message);
  console.info('**************');
};


export default {
  mongodbUri: 'mongodb://localhost:27017/test',
  port: env.PORT || 9191,
  host: env.host || '0.0.0.0',
  get serverUrl() {
    return `http://${this.host}:${this.port}`;
  }
};