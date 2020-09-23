import React from 'react'
import classes from './Footer.module.css';


function Footer() {
    return (
        <div className={classes.footer}>
                
                <div className={classes.footer__links}>
                    <p>YTS © 2011 - 2020</p>
                    <a href="/">Blog</a>-
                    <a href="/">DMCA</a>-
                    <a href="/">Api</a>-
                    <a href="/">RSS</a>-
                    <a href="/">Contact</a>-
                    <a href="/">Browse Movies</a>-
                    <a href="/">Requests</a>-
                    <a href="/">Login</a>-

                </div>
                <div className={classes.footer__copyright}>
                    <p>
                        By using this site you agree to and 
                        accept our <span>User Agreement</span>, which can be read <span>here</span>.
                    </p>
                </div>
        </div>
    )
}

export default Footer
