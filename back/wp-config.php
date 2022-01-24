<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'my_reddit' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'fXwZN^<gf;Jmbe)w;q_dpuo+Vc~SL,O^tmY)2,D81^]TX;iH~xyhbVRIP}%;%kZ(' );
define( 'SECURE_AUTH_KEY',  'fUQ)5[h&3Cp2,CWL{*f8|>]=O[{Ak9J!005c@{Lo6$/,04}6JI] ?Or^0{8!~c08' );
define( 'LOGGED_IN_KEY',    'LnE{Q/wUadb&D>C{o<E%6b1571}A%%nTjsKU9_-WH p9CPVB$G5DS;Gj.|y)7)c9' );
define( 'NONCE_KEY',        '(JaR`}v+gr^+_5MW8`f3q.s@Ic3kg-;C.YbK@CG39BVNr]L~= Gc%a1NKtn;P8N ' );
define( 'AUTH_SALT',        '@+Oe>17vqEeJS~pzaO21jpde%D~?JdePtxXq6%c-lXN>Bbr4L6OO!1Sr2_/&3&f0' );
define( 'SECURE_AUTH_SALT', 'oy;XB//uf/KX-;dzdk%|h}uW;CtK[ExZzaLBfNAH3IB*7`Aq3`ts7/]3?L}@!$ZW' );
define( 'LOGGED_IN_SALT',   '%xnZDZ/7$FA_I9H-zhP8U()% ;]hv@z G_*{Sg*$K}mUN76B;u([_SR)ulGnVY+_' );
define( 'NONCE_SALT',       '-)/SiubPNpy1@]#9cg 2:B#X0n=o@98|JqDIyPsvH*_;WzCDHJy*ia,A8{7v~U<[' );

define('JWT_AUTH_SECRET_KEY', '5Hs0y+}<T9ZD2eC[T}$(!+3--b$z`//&C*jl0MUL9{n&btA&Ktb`8a?Is}c/da?m');
define('JWT_AUTH_CORS_ENABLE', true);

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
