import React from "react";
import './App.css';
import { AiOutlineTwitter, AiTwotoneStar, AiOutlinePicture, AiOutlineSmile, AiOutlineFileGif, AiOutlineAlignLeft, AiOutlineDown, AiOutlineSearch } from 'react-icons/ai';
import { BiHomeCircle, BiHash, BiBell } from 'react-icons/bi';
import { MdMailOutline, MdBookmarkBorder } from 'react-icons/md';
import { FaUserCircle, FaEllipsisH, FaRegComment, FaRetweet, FaRegHeart } from 'react-icons/fa';
import { BsCardText, BsGear, BsUpload } from 'react-icons/bs';




function App() {
  return (
    <div className="App">
      <div className="Main">


        <div className="Sidebar_Area">
          <div className="Twitter">
            <AiOutlineTwitter color="#1DA1F2" fontSize="2.3rem" />
          </div>
          <div className="Icons">
            <BiHomeCircle color="#1DA1F2" fontSize="2rem" />
            <div>Home</div>
          </div>
          <div className="Icons">
            <BiHash color="#1DA1F2" fontSize="2rem" />
            <div>Explore</div>
          </div>
          <div className="Icons">
            <BiBell color="#1DA1F2" fontSize="2rem" />
            <div>Notification</div>
          </div>
          <div className="Icons">
            <MdMailOutline color="#1DA1F2" fontSize="2rem" />
            <div>Messages</div>
          </div>
          <div className="Icons">
            <MdBookmarkBorder color="#1DA1F2" fontSize="2rem" />
            <div>Bookmark</div>
          </div>
          <div className="Icons">
            <BsCardText color="#1DA1F2" fontSize="2rem" />
            <div>Lists</div>
          </div>
          <div className="Icons">
            <FaUserCircle color="#1DA1F2" fontSize="2rem" />
            <div>Profiles</div>
          </div>
          <div className="Icons">
            <FaEllipsisH color="#1DA1F2" fontSize="2rem" />
            <div>More</div>
          </div>
          <div className="Icons">
            <button className="btn">Tweet</button>
          </div>
        </div>


        <div className="Main_Area">
          <div className="Home">
            <div className="home">
              Home
          </div>
            <div className="Star_icon">
              <AiTwotoneStar color="#1DA1F2" fontSize="2rem" />
            </div>
          </div>
          <br></br>

          <div className="Create_post">
            <div className="Add_text">
              <div className="Profile">
                <img src="/images/ylvyN1V.jpg" alt="dp" style={{ height: '35px', width: '35px', borderRadius: '50%' }} />
              </div>
              <input type="Post" placeholder="What's Heppening" />
            </div>

            <div className="Btns">
              <div className="Icon">
                <div className="Btns_icon">
                  <AiOutlinePicture fontSize="1.5rem" color="#1DA1F2" />
                </div>
                <div className="Btns_icon">
                  <AiOutlineFileGif fontSize="1.5rem" color="#1DA1F2" />
                </div>
                <div className="Btns_icon">
                  <AiOutlineAlignLeft fontSize="1.5rem" color="#1DA1F2" />
                </div>
                <div className="Btns_icon">
                  <AiOutlineSmile fontSize="1.5rem" color="#1DA1F2" />
                </div>
              </div>
              <div className="Tweets">
                <button className="btns-create">Tweet</button>
              </div>
            </div>
          </div>
          <div className="posted_Area">
            <div className="Profile">
              <div className="User_Detail">
                <img src="/images/Summer-HD-Sunshine-Wallpapers.jpg" alt="logo" style={{ height: '30px', width: '30px', borderRadius: '50%' }} />
                <div className="User_Name"> Erjus Stafa </div>
                <div className="id"> @Erjus_Stafa </div>
              </div>
              <div className="Drop_down">
                <AiOutlineDown fontSize="1rem" />
              </div>
            </div>
            <div className="Qoutes">
              The best and most beautifuk things in this world cannot be seen or even heard , but must be felt with the heart.
            </div>
            <br></br>
            <div className="Profile_images">
              <img src="/images/111207.jpg" alt="profile" style={{ width: '100%', height: '23rem', objectFit: 'fill' }} />
            </div>
            <div className="Comment_Section">
              <div className="Comment">
                <FaRegComment fontSize="1.4rem" />
              </div>
              <div className="Comment">
                <FaRetweet fontSize="1.4rem" />
              </div>
              <div className="Comment">
                <FaRegHeart fontSize="1.4rem" />
              </div>
              <div className="Comment">
                <BsUpload fontSize="1.4rem" />
              </div>
            </div>
          </div>
          <br></br>
          <div className="posted_Area">
            <div className="Profile">
              <div className="User_Detail">
                <img src="/images/Summer-HD-Sunshine-Wallpapers.jpg" alt="logo" style={{ height: '30px', width: '30px', borderRadius: '50%' }} />
                <div className="User_Name"> Muhamed  </div>
                <div className="id"> @ss_frachen</div>
              </div>
              <div className="Drop_down">
                <AiOutlineDown fontSize="1rem" />
              </div>
            </div>
            <div className="Qoutes">
              Beautiful Natureee            </div>
            <br></br>
            <div className="Profile_images">
              <img src="/images/Summer-HD-Sunshine-Wallpapers.jpg" alt="profile" style={{ width: '100%', height: '23rem', objectFit: 'fill' }} />
            </div>
            <div className="Comment_Section">
              <div className="Comment">
                <FaRegComment fontSize="1.4rem" />
              </div>
              <div className="Comment">
                <FaRetweet fontSize="1.4rem" />
              </div>
              <div className="Comment">
                <FaRegHeart fontSize="1.4rem" />
              </div>
              <div className="Comment">
                <BsUpload fontSize="1.4rem" />
              </div>
            </div>
          </div>
          <br></br>
          <div className="posted_Area">
            <div className="Profile">
              <div className="User_Detail">
                <img src="/images/maxresdefault.jpg" alt="logo" style={{ height: '30px', width: '30px', borderRadius: '50%' }} />
                <div className="User_Name"> John  Smith</div>
                <div className="id"> @john_s </div>
              </div>
              <div className="Drop_down">
                <AiOutlineDown fontSize="1rem" />
              </div>
            </div>
            <div className="Qoutes">
              Sahara from Marocco .
              Peace !
            </div>
            <br></br>
            <div className="Profile_images">
              <img src="/images/maxresdefault.jpg" alt="profile" style={{ width: '100%', height: '23rem', objectFit: 'fill' }} />
            </div>
            <div className="Comment_Section">
              <div className="Comment">
                <FaRegComment fontSize="1.4rem" />
              </div>
              <div className="Comment">
                <FaRetweet fontSize="1.4rem" />
              </div>
              <div className="Comment">
                <FaRegHeart fontSize="1.4rem" />
              </div>
              <div className="Comment">
                <BsUpload fontSize="1.4rem" />
              </div>
            </div>
          </div>
          <br></br>
          <div className="posted_Area">
            <div className="Profile">
              <div className="User_Detail">
                <img src="/images/th.jpg" alt="logo" style={{ height: '30px', width: '30px', borderRadius: '50%' }} />
                <div className="User_Name"> Xheni Stafa </div>
                <div className="id"> @xh_st </div>
              </div>
              <div className="Drop_down">
                <AiOutlineDown fontSize="1rem" />
              </div>
            </div>
            <div className="Qoutes">
              Enjoy Life!
            </div>
            <br></br>
            <div className="Profile_images">
              <img src="/images/th.jpg" alt="profile" style={{ width: '100%', height: '23rem', objectFit: 'fill' }} />
            </div>
            <div className="Comment_Section">
              <div className="Comment">
                <FaRegComment fontSize="1.4rem" />
              </div>
              <div className="Comment">
                <FaRetweet fontSize="1.4rem" />
              </div>
              <div className="Comment">
                <FaRegHeart fontSize="1.4rem" />
              </div>
              <div className="Comment">
                <BsUpload fontSize="1.4rem" />
              </div>
            </div>
          </div>
        </div>


        <div className="Left_Sidebar_Area">
          <div className="Search">
            <AiOutlineSearch fontSize="1.5rem" style={{borderRadius : "50%"}} />
            <div className="Search_input">
              <input type="Search"  placeholder="Search Twitter" />              
            </div>
          </div>
          <br></br>
          <div className="Container">
            <div className="Trends">
              <div className="Trends_4u">
                Trends for you
              </div>
              <div className="Setting_icon">
                <BsGear  fontSize="1.5rem" color="#1DA2F2" />
              </div>
            </div>
            <div className="Trending_worlwide">
              <div className="Trending_show"> 
                Treding worldwide
              </div>
              <div className="tag">
                WorldNews
              </div>
              <div className="tweet_people">
                125k
              </div>
              <div className="tweets">
                6,780 people are  tweeting this.
              </div>
            </div>
            <br></br>
            <div className="Trending_worlwide">
              <div className="Trending_show"> 
                Treding worldwide
              </div>
              <div className="tag">
                BreakingNews
              </div>
              <div className="tweet_people">
                12k
              </div>
              <div className="tweets">
                988 people are  tweeting this.
              </div>
            </div>
            <br></br>
            <div className="Trending_worlwide">
              <div className="Trending_show"> 
                Treding worldwide
              </div>
              <div className="tag">
                GreatestForAllTime
              </div>
              <div className="tweet_people">
                500k
              </div>
              <div className="tweets">
                10,200 people are  tweeting this.
              </div>
            </div>
            <br></br>
            <div className="Trending_worlwide">
              <div className="Trending_show"> 
                Treding worldwide
              </div>
              <div className="tag">
                WorldNews
              </div>
              <div className="tweet_people">
                125k
              </div>
              <div className="tweets">
                6,780 people are  tweeting this.
              </div>
            </div>
          </div>
          <br></br>
          <div className="See_more">
            See More
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
