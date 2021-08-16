const express = require("express");
const router = express.Router();
const inforRouter = require("./infoSchema");

//create
router.post("/", async (req, res) => {
  // console.log(req.body)
  var data = new inforRouter({
    Name: req.body.Name,
    Age: req.body.Age,
    City: req.body.City,
  });
  await data.save();
  res.json(data);
});

//getAll
router.get("/", async (req, res) => {
  try {
    const getAll = await inforRouter.find();
    res.json(getAll);
  } catch (error) {
    res.json({ Error: error });
  }
});

//update
router.put("/update", async (req, res) => {
  try {
    const update = await inforRouter.update(
      { _id: req.body._id },
      {
        $set: {
          Name: req.body.Name,
          Age: req.body.Age,
          City: req.body.City,
        },
      }
    );
    res.json(update);
  } catch (error) {
    res.json({ Error: error });
  }
});

//delete
router.delete("/del/:id", async (req, res) => {
  try {
    const del = await inforRouter.findByIdAndDelete(req.params.id).then(e=>{
        res.json({message:"Deleted Successfully"})
    });
  } catch (error) {
    res.json({ Error: error });
  }
});

router.get("/", (req, res) => {
  res.json("I am from router file");
});
module.exports = router;
