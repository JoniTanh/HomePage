const firebaseUtils = require("../utils/firebase");
const { ref, listAll, getDownloadURL } = require("firebase/storage");

const getProjectImages = async (req, res) => {
  const projectName = req.params.projectName;
  const projectRef = ref(firebaseUtils.storage, `${projectName}/`);

  try {
    const imageList = await listAll(projectRef);
    const urls = await Promise.all(
      imageList.items.map((item) => getDownloadURL(item))
    );

    res.status(200).send({ images: urls });
  } catch (error) {
    res.status(500).send({ message: "Error retrieving images", error });
  }
};

module.exports = { getProjectImages };
