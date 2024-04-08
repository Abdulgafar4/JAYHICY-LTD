/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import style from "./style.module.css";
import Image from "next/image";
import { useState } from "react";
import Button from '../Button'

export default function Step() {
  const [appState, changeState] = useState({
    activeObject: null,
    objects: [
      {
        id: 1,
        image: "edit.svg",
        image_active: "edit-active.svg",
        text: "Design your dream",
      },
      {
        id: 2,
        image: "stack.svg",
        image_active: "stack-active.svg",
        text: "Build and release",
      },
      {
        id: 3,
        image: "home.svg",
        image_active: "home-active.svg",
        text: "Ready to be occupied",
      },
    ],
  });

  function toggleActive(key) {
    changeState({ ...appState, activeObject: appState.objects[key] });
  }

  const [firstItemActive, setFirstItemActive] = useState(true);

  return (
    <div className={style.step}>
      <div>
        <Image src="/img/img-step.png" width={575} height={710} />
      </div>
      <div>
        <h1 style={{margin: "0"}}>
          Simple <u>Step,</u>
          <br />
          Big <u>Move</u>
        </h1>
        <p>
          JAYHICY NIGERIA LIMITED IS A DESIGN, CONSTRUCTION,
ESTATE MANAGEMENT, QUANTITY SURVEYING AND PROJECT
MANAGEMENT FIRM BASED IN ILORIN, KWARA STATE.
SINCE INCEPTION, IT HAS UNDERGONE VARIOUS DESIGN AND
CONSTRUCTION PROJECTS FOR INDIVIDUALS AND ORGANISATIONS.
IT HAS THE NEEDED EXPERTISE FOR A PERFECT DELIVERY OF
CONSTRUCTION PROJECTS RIGHT FROM INITIATION TO
COMPLETION. ITS PROJECTS CUT ACROSS DIFFERENT PART OF THE
COUNTRY, NOTABLE IN KWARA STATE, ABUJA, ZARIA AND MANY
MORE.
ITS VAST EXPERIENCE IN THE CONSTRUCTION AND ABILITY TO
INNOVATE STRATEGIES TO ACHIEVE THE CLIENT’S NEED AT THE
REQUIRED BUDGET IS WHERE ITS STRENGTH LIES.
ITS PROFESSIONALS HAVE GREAT KNOWLEDGE OF THE USE OF
DESIGN SOFTWARES RANGING FROM AUTOCAD, REVIT
ARCHITECTURE, SKETCHUP ETC TO EASE THE DESIGN AND
PRODUCE AN APPEALING DESIGN OUTPUT.

        </p>
        <div className={style.box_steps}>
          {appState.objects.map((item, key) => (
            <div
              className={` ${style.box} ${
                appState.objects[key] == appState.activeObject
                  ? style.active
                  : ""
              } ${key == 0 ? `${firstItemActive ? style.active : ""}` : ""} `}
              onMouseOver={() => {
                toggleActive(key);
                setFirstItemActive(false);
              }}
              key={key}
            >
              <img
                src={`/img/${
                  appState.objects[key] == appState.activeObject
                    ? item.image_active
                    : `${
                        key == 0
                          ? `${
                              firstItemActive
                                ? item.image_active
                                : item.image
                            }`
                          : item.image
                      } `
                }`}
              />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <Button text="Contact US" icon="Phone"/>
      </div>
    </div>
  );
}
