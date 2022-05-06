import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import style from "./JobDetails.module.css";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CardActions from "@mui/material/CardActions";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import data from "../database.json";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { jobOverview } from "./jobOverview";
const JobDetails = () => {
  console.log(jobOverview[0].icon);
  return (
    <>
      <div className={style.container}>
        <div className={style.block}>
          <Card>
            <CardContent>
              <div className={style.card_container}>
                <div>
                  <div className={style.card_content}>
                    <div className={style.photo}>
                      <div className={style.imageDiv}>
                        <p className={style.imageDivParaGraph}></p>
                      </div>
                    </div>
                    <div className={style.list_content}>
                      <a className={style.role}></a>
                      <small className={style.small}></small>

                      <span className={style.badge}>FAv</span>
                      <ul className={style.ul}>
                        <li>
                          <FmdGoodRoundedIcon
                            style={{
                              fontSize: "13px",
                              marginLeft: "6px",
                              color: "#74788d",
                            }}
                            className={style.locationIcon}
                          />

                          <AccountBalanceWalletIcon
                            style={{
                              fontSize: "15px",
                              marginLeft: "6px",
                              color: "#74788d",
                            }}
                            className={style.locationIcon}
                          />
                        </li>
                      </ul>
                    </div>
                    <div className={style.sectors}>
                      <div></div>
                    </div>
                    <div className={style.favContent}>
                      <div
                      // className={
                      //   checkFav(item.sourceId)
                      //     ? style.FavoriteLiked
                      //     : style.FavoriteIcon
                      // }
                      >
                        <a>
                          <FavoriteBorderOutlinedIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className={style.block}>
          <Card>
            <CardContent>
              <div className={style.card_container}>
                <h3 className={style.jobOverview}>Job Overview</h3>
                <div>
                  <div>
                    <div className={style.list_content}>
                      {/* <ul className={style.ul}>
                        <li className={style.divider}>
                          <AccountCircleIcon
                            style={{ fontSize: 45, color: "#02af74" }}
                          />
                          <div className={style.portion}>
                            <span className={style.title}> JobTitle</span>
                            <p className={style.para}>Product Designer</p>
                          </div>
                        </li>
                      </ul> */}

                      {/* <div className={style.icon}>
                        <AccountCircleIcon
                          style={{ fontSize: 45, color: "#02af74" }}
                        />
                        <div className={style.description}>
                          <span className={style.title}> Job Title</span>

                          <span className={style.para}>Product Designer</span>
                        </div>
                                          </div> */}
                      {jobOverview.map((e) => {
                        return (
                          <div className={style.icon} key={e.id}>
                            {e.icon}
                            <div className={style.description}>
                              <span className={style.title}>{e.name}</span>

                              <span className={style.para}>{e.role}</span>
                            </div>
                          </div>
                        );
                      })}
                     <div className={style.addbtn}>
                                              <a className={style.applyNow}>Apply Now <ArrowRightAltIcon  /></a>
                                              
                        <a className={style.bookmark}>Add Bookmark <BookmarkBorderIcon /></a>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
