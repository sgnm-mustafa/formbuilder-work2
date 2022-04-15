const express = require("express");
const app = express();
const mongoose = require("mongoose");
const FormModel = require("./models/formModel");

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://mdurmaz:sason123@cluster0.kzyvo.mongodb.net/formdeneme?retryWrites=true&w=majority"
);

app.get("/", (req, res) => {
  FormModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/", async (req, res) => {
  const newForm = new FormModel(req.body);
  newForm.save().then(data=>{
    res.json(data);
  })
  .catch(err=>{
    res.json(err);
  })
});

app.delete("/:id", async (request, response) => {
  try {
    const item = await FormModel.findByIdAndDelete(request.params.id);

    if (!item) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});

app.patch("/:id", async (req, res) => {
	try {
		const post = await FormModel.findOne({ _id: req.params.id })

	
		await post.save()
		res.send(post)
	} catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
})

app.listen(3002, () => console.log("Server run"));
