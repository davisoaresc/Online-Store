const errorHandle = (error, _req, res, _next) => {
  console.log(error);
  return res.status(500).json({ message: "Somenthing went wrong" });
}

export default errorHandle;
