const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.setHeader('Content-Type', 'application/json'); // Set the response header to JSON
  
    const errorResponse = {
      msg: err?.message,
      stack: process.env.NODE_ENV === 'production' ? null : err?.stack,
    };
  
    res.json(errorResponse);
  };
  
//Not found 
// Not found
const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.setHeader('Content-Type', 'application/json'); // Set the response header to JSON
    res.status(404).json({
      msg: error.message,
      stack: process.env.NODE_ENV === 'production' ? null : error.stack,
    });
  };
  
module.exports = {errorHandler, notFound};