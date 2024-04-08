/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import style from "./style.module.css";

export default function Featured() {
  const itemFeatured = [
    {
      id: 1,
      image: "Diamond.svg",
      title: "Revit Architecture",
      text: "At JAYHICY, Our Revit skills really make the designs come to life."  
    },
    {
      id: 2,
      image: "Fire.svg",
      title: "Lumion",
      text:"The lighting and materials in our Lumion scene are incredible, it looks so real!"   
    },
    {
      id: 3,
      image: "Lightning.svg",
      title: "Project Management",
      text: "We're a fantastic project manager! We keep everything on track and well-informed the team."  },
    {
      id: 4,
      image: "Layout.svg",
      title: "Auto CAD",
      text:"We're a whiz with AutoCAD. Need some drawings done?"
      },
    {
      id: 5,
      image: "Settings.svg",
      title: "Vray",
      text: "Our Vray renders are next-level realistic. Let us know if you have a project that needs that special touch."
    },
    {
      id: 6,
      image: "Power-button.svg",
      title: "Microsoft Office",
      text: "We're a Microsoft Office power user. Spreadsheets, presentations, you name it, We can handle it." },
    {
      id: 7,
      image: "Fire.svg",
      title: "Google SketchUp",
      text: "We can create some impressive 3D models in SketchUp. Want to see your design come to life? Don't be shy come for us." 
    },
    {
      id: 8,
      image: "Lightning.svg",
      title: "Construction Management",
      text: "We're a pro at keeping construction projects on track. Let us know if you need help managing your next build."
    },
    {
      id: 9,
      image: "Layout.svg",
      title: "Consultancy",
      text: "We can provide expert advice and solutions to your challenges. We're here to help your business thrive."
    },
  ];

  return (
    <div className={style.section_featured} id="featured">
            <h1>
        <u>Our Skills</u>
      </h1>
    <div className={style.featured} >
      {itemFeatured.map((item) => (
        <div className={style.box_featured} key={item.id}>
          <img src={`/img/${item.image}`} />
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
    </div>
  );
}
