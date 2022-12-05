import { Router } from "express";
import AlbumModel from "../models/album.model.js";

const router = Router();

router.post("/albums", async (req, res) => {
    try {
        console.log(req.body);
        const newAlbum = await AlbumModel.create(
            { ...req.body });
        return res.status(201).json(newAlbum);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

router.get("/albums", async (req, res) => {
    try {
        const allAlbums = await AlbumModel.find();
        return res.status(200).json(allAlbums);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

router.get("/albums/:albumId", async (req, res) => {
    try {
        const { albumID } = req.params;
        const album = await AlbumModel.findOne({ _id: albumID });
        return res.status(200).json(album);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

router.put("/albums/:albumId", async (req, res) => {
    try {
        const { albumID } = req.params;
        const updateAlbum = await AlbumModel.findByIdAndUpdate(
            albumID,
            { ...req.body },
            { new: true, runValidators: true }
            );
        return res.status(200).json(updateAlbum);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

router.delete("/albums/:albumId", async (req, res) => {
    try {
        const { albumID } = req.params;
        const deleteAlbum = await AlbumModel.findByIdAndRemove(albumID);
        return res.status(204).json(deleteAlbum);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

export default router