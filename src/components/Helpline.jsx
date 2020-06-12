import React from 'react';
import cx from 'classnames';

import styles from '../css/Helpline.module.css';

const Helpline = () => {
  return (
    <div className={styles.helpContainer}>
      <div className={cx(styles.stateDetails, styles.box)}>
        <h2>Statewise Helpline number</h2>
        <div className={styles.helpTable}>
          <table className={styles.helplineTable}>
            <thead id={styles.tableHeading}>
              <tr>
                <th>Sr.No</th>
                <th className='state-col'>State</th>
                <th>Helpline Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Andhra Pradesh</td>
                <td>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='tel:0866-2410978'
                  >
                    0866-2410978
                  </a>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Arunachal Pradesh</td>
                <td>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='tel:9536055743'
                  >
                    9536055743
                  </a>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Assam</td>
                <td>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='tel:6913347770'
                  >
                    6913347770
                  </a>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Bihar</td>
                <td>
                  <a target='_blank' rel='noopener noreferrer' href='tel:104'>
                    104
                  </a>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Chhattisgarh</td>
                <td>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='tel:077122-35091'
                  >
                    077122-35091
                  </a>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>Goa</td>
                <td>
                  <a target='_blank' rel='noopener noreferrer' href='tel:104'>
                    104
                  </a>
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>Gujarat</td>
                <td>
                  <a target='_blank' rel='noopener noreferrer' href='tel:104'>
                    104
                  </a>
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>Haryana</td>
                <td>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='tel:8558893911'
                  >
                    8558893911
                  </a>
                </td>
              </tr>
              <tr>
                <td>9</td>
                <td>Himachal Pradesh</td>
                <td>
                  <a target='_blank' rel='noopener noreferrer' href='tel:104'>
                    104
                  </a>
                </td>
              </tr>
              <tr>
                <td>10</td>
                <td>Jharkhand</td>
                <td>
                  <a target='_blank' rel='noopener noreferrer' href='tel:104'>
                    104
                  </a>
                </td>
              </tr>
              <tr>
                <td>11</td>
                <td>Karnataka</td>
                <td>
                  <a target='_blank' rel='noopener noreferrer' href='tel:104'>
                    104
                  </a>
                </td>
              </tr>
              <tr>
                <td>12</td>
                <td>Kerala</td>
                <td>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='tel:0471-2552056'
                  >
                    0471-2552056
                  </a>
                </td>
              </tr>
              <tr>
                <td>13</td>
                <td>Madhya Pradesh</td>
                <td>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='tel:0755-2527177'
                  >
                    0755-2527177
                  </a>
                </td>
              </tr>
              <tr>
                <td>14</td>
                <td>Maharashtra</td>
                <td>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='tel:020-26127394'
                  >
                    020-26127394
                  </a>
                </td>
              </tr>
              <tr>
                <td>15</td>
                <td>Manipur</td>
                <td>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='tel:3852411668'
                  >
                    3852411668
                  </a>
                </td>
              </tr>
              <tr>
                <td>16</td>
                <td>Meghalaya</td>
                <td>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='tel:9366090748'
                  >
                    9366090748
                  </a>
                </td>
              </tr>
              <tr>
                <td>17</td>
                <td>Mizoram</td>
                <td>
                  <a target='_blank' rel='noopener noreferrer' href='tel:102'>
                    102
                  </a>
                </td>
              </tr>
              <tr>
                <td>18</td>
                <td>Nagaland</td>
                <td>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='tel:7005539653'
                  >
                    7005539653
                  </a>
                </td>
              </tr>
              <tr>
                <td>19</td>
                <td>Odisha</td>
                <td>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='tel:9439994859'
                  >
                    9439994859
                  </a>
                </td>
              </tr>
              <tr>
                <td>20</td>
                <td>Punjab</td>
                <td>
                  <a target='_blank' rel='noopener noreferrer' href='tel:104'>
                    104
                  </a>
                </td>
              </tr>
              <tr>
                <td>21</td>
                <td>Rajasthan</td>
                <td>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='tel:0141-2225624'
                  >
                    0141-2225624
                  </a>
                </td>
              </tr>
              <tr>
                <td>22</td>
                <td>Sikkim</td>
                <td>
                  <a target='_blank' rel='noopener noreferrer' href='tel:104'>
                    104
                  </a>
                </td>
              </tr>
              <tr>
                <td>23</td>
                <td>Tamil Nadu</td>
                <td>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='tel:044-29510500'
                  >
                    044-29510500
                  </a>
                </td>
              </tr>
              <tr>
                <td>24</td>
                <td>Telangana</td>
                <td>
                  <a target='_blank' rel='noopener noreferrer' href='tel:104'>
                    104
                  </a>
                </td>
              </tr>
              <tr>
                <td>25</td>
                <td>Tripura</td>
                <td>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='tel:0381-2315879'
                  >
                    0381-2315879
                  </a>
                </td>
              </tr>
              <tr>
                <td>26</td>
                <td>Uttarakhand</td>
                <td>
                  <a target='_blank' rel='noopener noreferrer' href='tel:104'>
                    104
                  </a>
                </td>
              </tr>
              <tr>
                <td>27</td>
                <td>Uttar Pradesh</td>
                <td>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='tel:18001805145'
                  >
                    18001805145
                  </a>
                </td>
              </tr>
              <tr>
                <td>28</td>
                <td>West Bengal</td>
                <td>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='tel:3323412600'
                  >
                    3323412600
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <table className={styles.helplineTable}>
            <thead id={styles.tableHeading2}>
              <tr>
                <th>Sr.No</th>
                <th className='state-col'>Union Territory</th>
                <th>Helpline Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Andaman and Nicobar Islands</td>
                <td>
                  <a
                    rel='noopener noreferrer'
                    target='_blank'
                    href='tel:03192-232102'
                  >
                    03192-232102
                  </a>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Chandigarh</td>
                <td>
                  <a
                    rel='noopener noreferrer'
                    target='_blank'
                    href='tel:9779558282'
                  >
                    9779558282
                  </a>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Dadra and Nagar Haveli and Daman &amp; Diu</td>
                <td>
                  <a rel='noopener noreferrer' target='_blank' href='tel:104'>
                    104
                  </a>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Delhi</td>
                <td>
                  <a
                    rel='noopener noreferrer'
                    target='_blank'
                    href='tel:011-22307145'
                  >
                    011-22307145
                  </a>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Jammu &amp; Kashmir</td>
                <td>
                  <a
                    rel='noopener noreferrer'
                    target='_blank'
                    href='tel:1912520982'
                  >
                    1912520982
                  </a>
                  <span>
                    <br />
                  </span>
                  <a
                    rel='noopener noreferrer'
                    target='_blank'
                    href='tel:0194-2440283'
                  >
                    0194-2440283
                  </a>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>Ladakh</td>
                <td>
                  <a
                    rel='noopener noreferrer'
                    target='_blank'
                    href='tel:1982256462'
                  >
                    1982256462
                  </a>
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>Lakshadweep</td>
                <td>
                  <a
                    rel='noopener noreferrer'
                    target='_blank'
                    href='tel:4896263742'
                  >
                    4896263742
                  </a>
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>Puducherry</td>
                <td>
                  <a rel='noopener noreferrer' target='_blank' href='tel:104'>
                    104
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className={styles.nationalDetails}>
        <h2>National Helpline Details</h2>
        <div className={styles.nationalDetailsDiv}>
          <div className={styles.alignment}>
            <h3>Helpline no (Toll Free)</h3>
            <a href='tel:+91-11-23978046'>+91-11-23978046</a>
          </div>

          <div className={styles.alignment}>
            <h3>Helpline Email</h3>
            <a href='mailto:ncov2019@gov.in'>ncov2019@gov.in</a>
            <a href='mailto:ncov2019@gmail.com'>ncov2019@gmail.com</a>
          </div>

          <div>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://twitter.com/MoHFW_INDIA'
            >
              <i className='fab fa-twitter fa-2x' id={styles.twitter}></i>
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.facebook.com/MoHFWIndia'
            >
              <i className='fab fa-facebook fa-2x' id={styles.facebook}></i>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.links}>
        <h2>Helpful Links</h2>
        <ul className={styles.helpLinks} id='helpLineID'>
          <li>
            <div className={styles.overflowLinksDiv}>
              <p>
                HELPLINE NUMBERS (by State)
                <br />
                <a href='https://www.mohfw.gov.in/coronvavirushelplinenumber.pdf'>
                  https://www.mohfw.gov.in/coronvavirushelplinenumber.pdf
                </a>
              </p>
            </div>
          </li>
          <li>
            <div className={styles.overflowLinksDiv}>
              <p>
                Ministry of Health and Family Welfare, Gov. of India
                <br />
                <a href='https://www.mohfw.gov.in/'>
                  https://www.mohfw.gov.in/
                </a>
              </p>
            </div>
          </li>
          <li>
            <div className={styles.overflowLinksDiv}>
              <p>
                Twitter updates by Press Information Bureau
                <br />
                <a href='https://twitter.com/PIB_India'>
                  https://twitter.com/PIB_India
                </a>
              </p>
            </div>
          </li>
          <li>
            <div className={styles.overflowLinksDiv}>
              <p>
                WHO : COVID-19 Guidelines
                <br />
                <a href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019'>
                  https://www.who.int/emergencies/diseases/novel-coronavirus-2019
                </a>
              </p>
            </div>
          </li>
          <li>
            <div className={styles.overflowLinksDiv}>
              <p>
                CDC
                <br />
                <a href='https://www.cdc.gov/coronavirus/2019-ncov/faq.html'>
                  https://www.cdc.gov/coronavirus/2019-ncov/faq.html
                </a>
              </p>
            </div>
          </li>
          <li>
            <div className={styles.overflowLinksDiv}>
              <p>
                Myth Busters By WHO
                <br />
                <a href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters'>
                  https://www.who.int/emergencies/diseases/
                  novel-coronavirus-2019/advice-for-public/myth-busters
                </a>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Helpline;
