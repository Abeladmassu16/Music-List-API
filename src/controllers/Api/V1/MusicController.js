const musicModel = require("../../../models/music");

module.exports = {
  // Create a new music entry
  post: async (req, res) => {
    const { title, singer, year } = req.body;
    
    // Simple validation for a four-digit year
    if (!Number.isInteger(year) || year.toString().length !== 4) {
        return res.status(400).json({ message: "Year must be a four-digit integer" });
    }
    try {
        const newMusic = await musicModel.create({ title, singer, year });
        res.status(201).json(newMusic);
    } catch (error) {
        console.error("Error creating music:", error);
        res.status(500).json({ message: "Error creating music" });
    }
},


  // Get all music entries
  get: async (req, res) => {
    try {
      const allMusic = await musicModel.findAll();
      res.status(200).json(allMusic);
    } catch (error) {
      console.error("Error fetching music:", error);
      res.status(500).json({ message: "Error fetching music from db" });
    }
  },

  // Update a music entry
  update: async (req, res) => {
    try {
      const id = req.params.id;
      const { title, singer, year } = req.body;
      const musicToUpdate = await musicModel.findByPk(id);

      if (!musicToUpdate) {
        return res.status(404).json({ message: "Music not found" });
      }

      await musicToUpdate.update({ title, singer, year });
      res.status(200).json({ message: "Music updated successfully" });
    } catch (error) {
      console.error("Error updating music:", error);
      res.status(500).json({ message: "Error updating music" });
    }
  },

  // Delete a music entry
  delete: async (req, res) => {
    try {
      const musicId = req.params.id;
      const musicToDelete = await musicModel.findByPk(musicId);

      if (!musicToDelete) {
        return res.status(404).json({ message: "Music not found" });
      }

      await musicToDelete.destroy();
      res.status(200).json({ message: "Music deleted successfully" });
    } catch (error) {
      console.error("Error deleting music:", error);
      res.status(500).json({ message: "Error deleting music" });
    }
  },
};
