import React from "react";
import styles from "../../styles/Landingpage.module.css";
import ti1 from "../../styles/Image/t1.jpeg";

export const Landingleft = () => {
  const [ldata, setLdata] = React.useState([]);
  const [adata, setAdata] = React.useState([]);

  React.useEffect(() => {
    let isSubcribed = true;
    fetch(`https://mediumserver.herokuapp.com/bloglist/all`)
      .then((res) => res.json())
      .then((res) => {
        isSubcribed && setLdata(res);
      })
      .catch((err) => console.log(err));

    fetch(
      // `https://skbhardwaj.herokuapp.com/newsapi`
      ` https://mediumserver.herokuapp.com/newslist/all`
    )
      .then((res) => res.json())
      .then((res) => {
        isSubcribed && setAdata(res);
      });

    return () => {
      // This code runs when component is unmounted
      isSubcribed = false; // (4) set it to false when we leave the page
    };
  }, []);

  return (
    <div className={styles.ll1}>
      {ldata.map((eblog, idx) =>
        eblog.image == null ? null : (
          <div key={idx} className={styles.ll2}>
            <div className={styles.ll3}>
              <div className={styles.ll4}>
                <div className={styles.ll41}>
                  <img
                    src={eblog.image}
                    alt=""
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = { ti1 };
                    }}
                  />
                </div>
                <div className={styles.ll42}>
                  <h4>{eblog.author}</h4>
                </div>
              </div>
              <div className={styles.ll5}>
                <h4>{eblog.title}</h4>
              </div>
              <div className={styles.ll6}>
                <p>{eblog.description}</p>
              </div>
              <div className={styles.ll7}>
                <div className={styles.ll71}>
                  {eblog.published_at.slice(0, 10)}
                </div>
                <div className={styles.ll72}>{eblog.category}</div>
                <svg
                  className={styles.ll721}
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  aria-label="Member only content"
                >
                  <path d="M7.44 2.32c.03-.1.09-.1.12 0l1.2 3.53a.29.29 0 0 0 .26.2h3.88c.11 0 .13.04.04.1L9.8 8.33a.27.27 0 0 0-.1.29l1.2 3.53c.03.1-.01.13-.1.07l-3.14-2.18a.3.3 0 0 0-.32 0L4.2 12.22c-.1.06-.14.03-.1-.07l1.2-3.53a.27.27 0 0 0-.1-.3L2.06 6.16c-.1-.06-.07-.12.03-.12h3.89a.29.29 0 0 0 .26-.19l1.2-3.52z"></path>
                </svg>
                <div className={styles.ll73}>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    className="lt"
                  >
                    <path
                      d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                      fill="#292929"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className={styles.ll8}>
              {" "}
              <img src={eblog.image} alt="" />
            </div>
          </div>
        )
      )}
      {adata.map((eblog, idx) => (
        <div key={idx} className={styles.ll2}>
          <div className={styles.ll3}>
            <div className={styles.ll4}>
              <div className={styles.ll41}>
                <img
                  src={eblog.urlToImage}
                  alt=""
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = { ti1 };
                  }}
                />
              </div>
              <div className={styles.ll42}>
                <h4>{eblog.author}</h4>
              </div>
            </div>
            <div className={styles.ll5}>
              <h4>{eblog.title}</h4>
            </div>
            <div className={styles.ll6}>
              <p>{eblog.description}</p>
            </div>
            <div className={styles.ll7}>
              <div className={styles.ll71}>
                {eblog.publishedAt.slice(0, 10)}
              </div>
              <div className={styles.ll72}>Tech</div>
              <svg
                className={styles.ll721}
                width="15"
                height="15"
                viewBox="0 0 15 15"
                aria-label="Member only content"
              >
                <path d="M7.44 2.32c.03-.1.09-.1.12 0l1.2 3.53a.29.29 0 0 0 .26.2h3.88c.11 0 .13.04.04.1L9.8 8.33a.27.27 0 0 0-.1.29l1.2 3.53c.03.1-.01.13-.1.07l-3.14-2.18a.3.3 0 0 0-.32 0L4.2 12.22c-.1.06-.14.03-.1-.07l1.2-3.53a.27.27 0 0 0-.1-.3L2.06 6.16c-.1-.06-.07-.12.03-.12h3.89a.29.29 0 0 0 .26-.19l1.2-3.52z"></path>
              </svg>
              <div className={styles.ll73}>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  className="lt"
                >
                  <path
                    d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                    fill="#292929"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className={styles.ll8}>
            {" "}
            <img src={eblog.urlToImage} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};
