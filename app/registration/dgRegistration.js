import React,{useState} from "react";
import { useRouteLoaderData } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
const DgRegistration = () => {
  const { currentUser} = useAuth();
  const [userData, setUserData] = useState({
    Name: currentUser.email,
    email: "",
    instituteName: "",
    phone: "",
    munAttended: "",
    munExperience: "",
    yes: "",
    no: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const {
      Name,
      email,
      instituteName,
      phone,
      munAttended,
      munExperience,
      yes,
      no,
    } = userData;
    if (
      Name &&
      email &&
      instituteName &&
      phone &&
      munAttended &&
      munExperience
    ) {
      const res = await fetch(
        "https://deltechmun-cabba-default-rtdb.firebaseio.com/dgRegistration.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Name,
            email,
            instituteName,
            phone,
            munAttended,
            munExperience,
            yes,
            no,
          }),
        }
      );

      if (res) {
        setUserData({
          // Name: "",
          // email: "",
          // instituteName: "",
          // phone: "",
          // munAttended: "",
          // munExperience: "",
          // discribeCommittee: "",
          // describeIssue: "",
          // Photographer: "",
          // Journalist: "",
          // yes: "",
          // no: "",
          // terms: "",
        });
        alert("You are Registered");
      } else {
        alert("Please fill the data");
      }
    } else {
      alert("Please fill the data");
    }
  };
  return (
    <>
      <section className=" bg-gray-900 text-white">
        <div className="flex flex-col items-center justify-center px-6 mx-auto md:h-full py-0">
          <img
            className="h-36 md:h-56 m-6"
            src="/images/cover.png"
            alt="logo"
          />
          <div className="w-full  rounded-lg shadow border sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
            <div className="p-6 space-y-3 md:space-y-5 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
                Delegate Application
              </h1>
              <div className="text-sm">
                Behold for the 12th Edition of{" "}
                <b> 𝐃𝐞𝐥𝐓𝐞𝐜𝐡 𝐌𝐨𝐝𝐞𝐥 𝐔𝐧𝐢𝐭𝐞𝐝 𝐍𝐚𝐭𝐢𝐨𝐧𝐬 𝐂𝐨𝐧𝐟𝐞𝐫𝐞𝐧𝐜𝐞 𝟐𝟎𝟐𝟑.</b>
              </div>
              <div className="text-sm">
                This year it will be bigger, better, more competitive, and more
                challenging. For, DelTech Model United Nations 2023, we are
                hosting five committees simulating various governmental councils
                surpassing the threshold established by the previous eleven
                editions of DelTech MUN.
              </div>
              <div className="text-sm">
                This year it will be bigger, better, more competitive, and more
                challenging. For, DelTech Model United Nations 2023, we are
                hosting five committees simulating various governmental councils
                surpassing the threshold established by the previous eleven
                editions of DelTech MUN.
              </div>
              <div className="text-sm">
                <b>Registration Fees:</b> <br />
                Individual Delegate: ₹ 1400
                <br />
                Double Delegation: ₹ 2800
                <br />
                International Press: ₹ 1400
              </div>
              <div className="text-sm">
                <p>𝘾𝙤𝙢𝙢𝙞𝙩𝙩𝙚𝙚𝙨 & 𝘼𝙜𝙚𝙣𝙙𝙖𝙨:</p> <br />
                <ol type="1" className="text-sm space-y-3">
                  <li>
                    <p>𝐔𝐧𝐢𝐭𝐞𝐝 𝐍𝐚𝐭𝐢𝐨𝐧𝐬 𝐆𝐞𝐧𝐞𝐫𝐚𝐥 𝐀𝐬𝐬𝐞𝐦𝐛𝐥𝐲 (𝐃𝐈𝐒𝐄𝐂)</p>
                    <p>
                      𝐸𝑥𝑝𝑙𝑜𝑟𝑖𝑛𝑔 𝑡ℎ𝑒 𝑓𝑒𝑎𝑠𝑖𝑏𝑖𝑙𝑖𝑡𝑦 𝑜𝑓 𝑜𝑏𝑠𝑒𝑟𝑣𝑎𝑛𝑐𝑒 𝑜𝑓 𝑒𝑛𝑣𝑖𝑟𝑜𝑛𝑚𝑒𝑛𝑡𝑎𝑙
                      𝑛𝑜𝑟𝑚𝑠 𝑖𝑛 𝑡ℎ𝑒 𝑑𝑟𝑎𝑓𝑡𝑖𝑛𝑔 𝑎𝑛𝑑 𝑖𝑚𝑝𝑙𝑒𝑚𝑒𝑛𝑡𝑎𝑡𝑖𝑜𝑛 𝑜𝑓 𝑎𝑔𝑟𝑒𝑒𝑚𝑒𝑛𝑡𝑠 𝑜𝑛
                      𝑑𝑖𝑠𝑎𝑟𝑚𝑎𝑚𝑒𝑛𝑡 𝑎𝑛𝑑 𝑎𝑟𝑚𝑠 𝑐𝑜𝑛𝑡𝑟𝑜𝑙.
                    </p>
                  </li>
                  <li>
                    <p> 𝐔𝐧𝐢𝐭𝐞𝐝 𝐍𝐚𝐭𝐢𝐨𝐧𝐬 𝐇𝐮𝐦𝐚𝐧 𝐑𝐢𝐠𝐡𝐭𝐬 𝐂𝐨𝐮𝐧𝐜𝐢𝐥 (𝐔𝐍𝐇𝐑𝐂)</p>
                    <p>
                      𝐷𝑖𝑠𝑐𝑢𝑠𝑠𝑖𝑛𝑔 𝑡ℎ𝑒 ℎ𝑢𝑚𝑎𝑛𝑖𝑡𝑎𝑟𝑖𝑎𝑛 𝑣𝑖𝑜𝑙𝑎𝑡𝑖𝑜𝑛𝑠 𝑏𝑦 𝑃𝑀𝑆𝐶𝑠, 𝑤𝑖𝑡ℎ 𝑎
                      𝑠𝑝𝑒𝑐𝑖𝑎𝑙 𝑒𝑚𝑝ℎ𝑎𝑠𝑖𝑠 𝑜𝑛 𝑐𝑜𝑛𝑓𝑙𝑖𝑐𝑡𝑒𝑑 𝑟𝑒𝑔𝑖𝑜𝑛𝑠.
                    </p>
                  </li>
                  <li>
                    <p>
                      𝐔𝐧𝐢𝐭𝐞𝐝 𝐍𝐚𝐭𝐢𝐨𝐧𝐬 𝐂𝐨𝐦𝐦𝐢𝐬𝐬𝐢𝐨𝐧 𝐨𝐧 𝐭𝐡𝐞 𝐒𝐭𝐚𝐭𝐮𝐬 𝐨𝐟 𝐖𝐨𝐦𝐞𝐧 (𝐔𝐍𝐂𝐒𝐖)
                    </p>
                    <p>
                      𝐼𝑠𝑠𝑢𝑒 𝑜𝑓 𝑑𝑒𝑐𝑟𝑖𝑚𝑖𝑛𝑎𝑙𝑖𝑧𝑎𝑡𝑖𝑜𝑛 𝑎𝑛𝑑 𝑙𝑒𝑔𝑎𝑙𝑖𝑧𝑎𝑡𝑖𝑜𝑛 𝑜𝑓 𝑠𝑒𝑥 𝑤𝑜𝑟𝑘,
                      𝑖𝑛𝑐𝑙𝑢𝑑𝑖𝑛𝑔 𝑡ℎ𝑒 𝑐𝑜𝑚𝑚𝑒𝑟𝑐𝑖𝑎𝑙 𝑒𝑥𝑐ℎ𝑎𝑛𝑔𝑒 𝑜𝑓 𝑠𝑒𝑥𝑢𝑎𝑙 𝑠𝑒𝑟𝑣𝑖𝑐𝑒𝑠.
                    </p>
                  </li>
                  <li>
                    <p>𝐔𝐧𝐢𝐭𝐞𝐝 𝐍𝐚𝐭𝐢𝐨𝐧𝐬 𝐒𝐞𝐜𝐮𝐫𝐢𝐭𝐲 𝐂𝐨𝐮𝐧𝐜𝐢𝐥 (𝐔𝐍𝐒𝐂)</p>
                    <p>𝐷𝑒𝑙𝑖𝑏𝑒𝑟𝑎𝑡𝑖𝑜𝑛 𝑜𝑛 𝑡ℎ𝑒 𝑇𝑎𝑖𝑤𝑎𝑛 𝐶𝑟𝑖𝑠𝑖𝑠.</p>
                  </li>
                  <li>
                    <p>𝐆𝐨𝐨𝐝𝐬 & 𝐒𝐞𝐫𝐯𝐢𝐜𝐞𝐬 𝐓𝐚𝐱 𝐂𝐨𝐮𝐧𝐜𝐢𝐥 (𝐆𝐒𝐓 𝐂𝐨𝐮𝐧𝐜𝐢𝐥)</p>
                    <p>
                      𝐷𝑒𝑙𝑖𝑏𝑒𝑟𝑎𝑡𝑖𝑜𝑛 𝑜𝑛 𝑡ℎ𝑒 𝐺𝑆𝑇 𝐴𝑐𝑡, 𝑊𝑖𝑡ℎ 𝑠𝑝𝑒𝑐𝑖𝑎𝑙 𝑒𝑚𝑝ℎ𝑎𝑠𝑖𝑠 𝑜𝑛
                      𝐽𝑢𝑟𝑖𝑠𝑑𝑖𝑐𝑡𝑖𝑜𝑛𝑎𝑙 𝑖𝑠𝑠𝑢𝑒𝑠.
                    </p>
                  </li>
                  <li>
                    <p> 𝐈𝐧𝐭𝐞𝐫𝐧𝐚𝐭𝐢𝐨𝐧𝐚𝐥 𝐏𝐫𝐞𝐬𝐬 (𝐈𝐏)</p>
                    <p>𝐽𝑜𝑢𝑟𝑛𝑎𝑙𝑖𝑠𝑡 & 𝑃ℎ𝑜𝑡𝑜𝑔𝑟𝑎𝑝ℎ𝑒𝑟𝑠</p>
                  </li>
                </ol>
              </div>
              <div className="text-sm">
                <p>𝐏𝐞𝐫𝐤𝐬 𝐨𝐟 𝐏𝐚𝐫𝐭𝐢𝐜𝐢𝐩𝐚𝐭𝐢𝐧𝐠:</p> <br />
                <ol className="text-sm space-y-3">
                  <li>1. Exciting Prizes worth INR 2 𝒍𝒂𝒌𝒉𝒔.</li>
                  <li>2. Certificates for Participation.</li>
                  <li>
                    3. Chance to delegate with the premier MUN in Delhi Circuit.
                  </li>
                  <li>4. Expand your debating and delegating circle.</li>
                  <li>
                    5. Hands-on experience with finely curated committees and
                    agendas.
                  </li>
                  <li>
                    6. Official Certificates and Trophies from DelTech MUN.
                  </li>
                  <li>7. Refreshments and full meals during the conference.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-gray-900 text-sm">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-full">
          <div className="w-full  rounded-lg shadow border sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium  text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className=" border  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    disabled={true}
                    placeholder={userData.email}
                    required
                  />
                </div>
               
                <div>
                  <label
                    htmlFor="Name"
                    className="block mb-2 text-sm font-medium  text-white"
                  >
                    Name
                  </label>
                  <input
                    type="Name"
                    name="Name"
                    id="Name"
                    value={useRouteLoaderData.Name}
                    onChange={postUserData}
                    placeholder="full name"
                    className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="instituteName"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Institute Name
                  </label>
                  <input
                    type="instituteName"
                    name="instituteName"
                    id="instituteName"
                    value={useRouteLoaderData.instituteName}
                    onChange={postUserData}
                    placeholder="School/College"
                    className="bordersm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Contact Number
                  </label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    value={useRouteLoaderData.phone}
                    onChange={postUserData}
                    placeholder="whatsapp number"
                    className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="munAttended"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    How many MUN's have you attended?
                  </label>
                  <textarea
                    type="munAttended"
                    name="munAttended"
                    id="munAttended"
                    value={useRouteLoaderData.munAttended}
                    onChange={postUserData}
                    placeholder="Your Answer"
                    className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="munExperience"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    List your MUN Experience.
                  </label>
                  <textarea
                    type="munExperience"
                    name="munExperience"
                    id="munExperience"
                    value={useRouteLoaderData.munExperience}
                    onChange={postUserData}
                    placeholder="Your Answer"
                    className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <fieldset />
                  <legend
                    htmlFor="preference1"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Are you applying for UNHRC?
                  </legend>
                  <label
                    className="block mb-2 text-sm font-medium text-white"
                    htmlFor="yes"
                  >
                    <input
                      className="mr-2"
                      type="radio"
                      name="grid"
                      id="yes"
                      value="yes"
                    />
                    Yes
                  </label>

                  <label
                    className="block mb-2 text-sm font-medium text-white"
                    htmlFor="no"
                  >
                    <input
                      className="mr-2"
                      type="radio"
                      name="grid"
                      id="no"
                      value="no"
                    />
                    No
                  </label>
                </div>
                <button
                  type="submit"
                  onClick={submitData}
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
                >
                  Register
                </button>
                
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DgRegistration;
