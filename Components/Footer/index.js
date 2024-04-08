/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import style from './style.module.css'

export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.footer_item}>
        <div>
          <div>
            <img src="/img/logo.svg"/>
            <h2>JayHicy</h2>
          </div>
          <p>Reiciendis et at rerum alias qui. Dolores sit quisquam qui debitis eum sint sapiente corporis labore. Error itaque fugit laudantium molestias voluptas debitis consequatur ad.</p>
        </div>
        <div>
          <div>
            <h4><u>Product</u></h4>
            <p>Updates</p>
            <p>Design</p>
            <p>Location</p>
            <p>Pricing product</p>
          </div>
          <div>
            <h4><u>Social Media</u></h4>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Youtube</p>
            <p>Facebook</p>
          </div>
        </div>
      </div>
      <div className={style.footer_terms}>
        <p>Copyright &copy; 2024 JayHicy</p>
        <p>Terms and Conditions  -  Privacy Policy</p>
      </div>
    </div>
  )
}
