import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

import DAILY_DATA from "../data/wanted_FE_trend-data-set.json";
import AD_DATA from "../data/wanted_FE_ad-list-data-set.json";
import MEDIA_DATA from "../data/wanted_FE-media-channel-data-set.json";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

app.get("/daily", async (req: Request, res: Response): Promise<Response> => {
  try {
    const {
      report: { daily },
    } = DAILY_DATA;
    return res.json({
      ok: true,
      daily,
    });
  } catch (error) {
    return res.json({
      ok: false,
      error,
      daily: [],
    });
  }
});

app.get(
  "/advertise",
  async (req: Request, res: Response): Promise<Response> => {
    try {
      const advertises = AD_DATA;
      return res.json({
        ok: true,
        advertises,
      });
    } catch (error) {
      return res.json({
        ok: false,
        error,
        advertises: [],
      });
    }
  }
);

app.get("/media", async (req: Request, res: Response): Promise<Response> => {
  try {
    const media = MEDIA_DATA;
    return res.json({
      ok: true,
      media,
    });
  } catch (error) {
    return res.json({
      ok: false,
      error,
      media: [],
    });
  }
});

const handleListening = () =>
  console.log(`Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
