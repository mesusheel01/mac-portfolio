import { Request, Response, NextFunction } from "express";

export const susheelAuthenticator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = String(req.query.token ?? "").trim();

  try {
    if (token.length === 7) {
      return next(); // ✅ return to prevent further execution
    }

    return res.status(401).json({
      msg: "No token provided!",
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Token not found!",
    });
  }
};
