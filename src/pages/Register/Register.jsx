import React, { useContext, useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { AuthContext } from "../../Auth/AuthProvider";
import { updateProfile } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const Register = () => {
  const { register, setUser, imgDb } = useContext(AuthContext);
  const storage = getStorage();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    const retypePass = form.repeatPass.value;

    console.log(email, password, retypePass);

    if (password === retypePass) {
      register(email, password)
        .then((userData) => {
          setUser(userData.user);
          const user = userData.user;
          const imgRef = ref(imgDb, `profile_images/${user.uid}.jpg`);
          uploadBytes(imgRef, img).then((getDownloadURL) => {
            updateProfile(user, {
              photoURL: getDownloadURL.metadata.fullPath,
            });
            console.log(user);
          });
        })
        .catch((error) => console.log(error));
    }
  };

  const [img, setImg] = useState();

  const handleImgSubmit = (e) => {
    const currentImg = e.target.files[0];

    setImg(currentImg);
    console.log(img);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-20">
      <div className="mb-5">
        <label
          htmlFor="img1"
          className="border-blue-500  border-dotted border flex items-center align-middle rounded col-span-1 justify-center aspect-square"
        >
          <div className="flex flex-col h-full w-full gap-3 justify-center items-center text-center">
            {img ? (
              <img
                className="h-full w-full object-cover"
                src={img}
                alt="Uploaded"
              />
            ) : (
              <>
                <CiImageOn className="text-4xl" />
                <h1 className="text-sm w-9/12 text-gray-500">
                  Drop your image or click here to browse
                </h1>
              </>
            )}
          </div>
          <input
            type="file"
            hidden
            name="image1"
            id="img1"
            onChange={handleImgSubmit}
            accept="image/*"
          />
        </label>
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 y-600 r-gray-400 -blue-500 er-blue-500 light"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Your password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 y-600 r-gray-400 -blue-500 er-blue-500 light"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="repeat-password"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Repeat password
        </label>
        <input
          type="password"
          id="repeat-password"
          name="repeatPass"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 y-600 r-gray-400 -blue-500 er-blue-500 light"
          required
        />
      </div>
      <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
          <input
            id="terms"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 y-600 -blue-600 t-gray-800 -offset-gray-800"
            required
          />
        </div>
        <label
          htmlFor="terms"
          className="ms-2 text-sm font-medium text-gray-900 300"
        >
          I agree with the{" "}
          <a href="#" className="text-blue-600 hover:underline 500">
            terms and conditions
          </a>
        </label>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center lue-700 -blue-800"
      >
        Register new account
      </button>
    </form>
  );
};

export default Register;
