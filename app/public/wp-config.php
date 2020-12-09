<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'tpMDPhjTDi635aPPXUivt0HyXeiXs28EQyhiu5NYky8ncpI7HCMdcQIP21FtZE34/5OrHz2lWMNBsR/5rIjTYA==');
define('SECURE_AUTH_KEY',  'ajhhnZjsqztLY0XGcTaxjbEvnL9Txa+ShoYE3UcVFXJfDUTyv338ZL/KVTcG8grq2hscZ+5aFyO4MEGoMEcexQ==');
define('LOGGED_IN_KEY',    'zxdzzMH3JNWO/kc4Hnuw5zUaz11hwyTI6hKvvZVxuJi32jhoWivTwZNodppiiCKB1l1Qf4/H9og+WPaLpRiVZg==');
define('NONCE_KEY',        '3lTQTU/lAAwUAIRJMMfvByl3693Ibn4KBFxZlagGQsaa1CngnQC3hgjchm6o7Hc4Dx/a+gO9N/SNTGTb1QHRoQ==');
define('AUTH_SALT',        'PikuFCxLg4IYLjI6lM/RU7enC5i64GK9Q5BqxU5qK8d/WYr+h4Wo+bGoozYTKMNRx6epHfEStvG7x8doJ2gOgw==');
define('SECURE_AUTH_SALT', 'gHWuO5u9SOZkteq7PP7/LLI62I+B0fg13hGzenMBcgNwY2S2SsLKXUQgqZCDz/rFsS+nQkxQKSP2NqMqtmZzeA==');
define('LOGGED_IN_SALT',   'PdD7c1zrQRHQa9XTJRsZ8JOBJZyTxbNMTrIfl59HLw4HhzckXyV5/dm4CoVrYzCn2wwzHWVUcx6rq8Lfix7eXg==');
define('NONCE_SALT',       'Obye/ePA2otfvMHtnsbhcAwCoQgbRkGKi0ZXSoGVJSVzMN10uNbOQNeeKW1CY0l3Lh6nPnxWJZdRzAer1XMV6Q==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
