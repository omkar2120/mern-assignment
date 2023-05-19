import React, { useEffect } from "react";
import axios from "axios";
const Worklist = () => {
  useEffect(() => {
    getAllData();
  }, []);
const img = "https://media.gettyimages.com/id/1304058743/vector/product-overview-flat-style-line-icons-vector-symbol-illustration.jpg?s=1024x1024&w=gi&k=20&c=N-BRmMrvLJRnShYFO1ZlevSKrAL-3Kyt7ls8lYLptcU="
  const [inputData, setInputData] = React.useState({
    file: "",
    title: "",
    descricption: "",
    quantity: "",
    price: "",
  });
  const [allInputData, setAllInputData] = React.useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      // setAllInputData([...allInputData, inputData]);
      const payload = {
        file: inputData.file,
        title: inputData.title,
        descricption: inputData.descricption,
        quantity: inputData.quantity,
        price: inputData.price,
      };
      axios
        .post("http://localhost:3001/createnew", payload)
        .then((response) => {
          console.log(response.data);
          getAllData();
          setInputData({
            file: "",
            title: "",
            descricption: "",
            quantity: "",
            price: "",
          });
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.log(error.message);
    }
  };
  const getAllData = async () => {
    try {
      const getData = await axios.get("http://localhost:3001/getAllUserData");
      setAllInputData(getData.data.data);
    } catch (err) {
      console.error(err);
    }
  };
  const handleTodoDelete = async (id) => {
    const payload = { id: id };
    axios
      .post("http://localhost:3001/deleteData", payload)
      .then(() => {
        getAllData();
        alert("Data deleted successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{marginTop:'50px'}}>
        <input
          type="file"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="file"
          name="file"
          value={inputData.file}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter title"
          name="title"
          value={inputData.title}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter descricption"
          name="descricption"
          value={inputData.descricption}
          onChange={handleChange}
        />
        <input
          type="number"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter quantity"
          name="quantity"
          value={inputData.quantity}
          onChange={handleChange}
        />
        <input
          type="number"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter price"
          name="price"
          value={inputData.price}
          onChange={handleChange}
        />
        <button
          type="button"
          onClick={handleSubmit}
          className="btn btn-primary"
          style={{ width: "590px" }}
        >
          Add
        </button>
      </nav>
      <table className="table" style={{marginTop:'50px'}}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Descricption</th>
            <th scope="col">Number</th>
            <th scope="col">Price(₹)</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {allInputData &&
            allInputData.map((el, l) => (
              <tr key={l}>
                <th scope="row">{l+1}</th>
                <td>
                  <img src={el?.file ? el?.file : img} height="50px" width="100px" />
                </td>
                <td>{el.title}</td>
                <td>{el.descricption}</td>
                <td>{el.quantity}</td>
                <td>₹{el.price}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => handleTodoDelete(el?._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Worklist;

// {allInputData && allInputData.map((el, i) => (
//   <div>
//     <tbody>
//       <tr>
//         <th scope="row">1</th>
//         <td>Mark</td>
//         <td>{el?.title}</td>
//         <td>{el?.descricption}</td>
//         <td>{el?.quantity}</td>
//         <td>{el.price}</td>
//         <button type="button" className="btn btn-outline-danger">
//           Delete
//         </button>
//       </tr>
//     </tbody>
//   </div>
// ))}
