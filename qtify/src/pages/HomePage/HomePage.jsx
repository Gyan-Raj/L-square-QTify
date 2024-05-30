// import React, { useState } from "react";
// // import Navbar from "../../components/Navbar/Navbar";
// import Hero from "../../components/Hero/Hero";
// // import Card from "../../components/Card/Card";
// import Section from "../../components/Section/Section";
// import style from "./HomePage.module.css";
// import { useOutletContext } from "react-router-dom";
// import { fetchFilters } from "../../api/api";

// const HomePage = () => {
//   // const [topAlbums, setTopAlbums] = useState([]);
//   // const [newAlbums, setNewAlbums] = useState([]);
//   const { data } = useOutletContext();
//   const { newAlbums, topAlbums, songs } = data;
//   return (
//     <>
//       <Hero />
//       <div className={style.wrapper}>
//         <Section title="Top Albums" data={topAlbums} type="album" />
//         <Section title="New Albums" data={newAlbums} type="album" />
//         <Section
//           title="Songs"
//           data={songs}
//           filterSource={fetchFilters}
//           type="song"
//         />
//       </div>
//     </>
//   );
// };
// export default HomePage;
