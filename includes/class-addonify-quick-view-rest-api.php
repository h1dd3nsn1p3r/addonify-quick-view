<?php 
/**
 * The class to define REST API endpoints used in settings page.
 *
 * This is used to define REST API endpoints used in admin settings page to get and update settings values.
 *
 * @since      1.0.7
 * @package    Addonify_Quick_View
 * @subpackage Addonify_Quick_View/includes
 * @author     Addonify <info@addonify.com>
 */
if ( ! class_exists( 'Addonify_Quick_View_Rest_API' ) ) {

    class Addonify_Quick_View_Rest_API 
    {

        /**
         * The namespace of the Rest API.
         *
         * @since    1.0.7
         * @access   protected
         * @var      string    $rest_namespace.
         */
        protected $rest_namespace = 'addonify_quick_view_options_api';


        /**
         * Register new REST API endpoints.
         *
         * @since    1.0.7
         */
        public function __construct() {

            add_action( 'rest_api_init', array( $this, 'register_rest_endpoints' ) );
        }


        /**
         * Define the REST API endpoints to get all setting options and update all setting options.
         *
         * @since    1.0.7
         * @access   public
         */
        public function register_rest_endpoints() {

            register_rest_route(
                $this->rest_namespace,
                '/get_options',
                array(
                    array(
                        'methods'   => 'GET',
                        'permission_callback' => '__return_true',
                        'callback'  => array( $this, 'rest_handler_get_settings_fields' )
                    )
                )
            );

            register_rest_route(
                $this->rest_namespace,
                '/update_options',
                array(
                    array(
                        'methods'   => \WP_REST_Server::CREATABLE,
                        'callback'  => array( $this, 'rest_handler_update_options' ),
                        'permission_callback' => '__return_true'
                    )
                )
            );
        }


        /**
         * Callback function to get all settings options values.
         * 
         * @since    1.0.7
         */
        public function rest_handler_get_settings_fields() {

            return addonify_quick_view_get_settings_fields();
        }


        /**
         * Callback function to update all settings options values.
         * 
         * @since    1.0.7
         * @param    \WP_REST_Request    $request    The request object.
         * @return   \WP_REST_Response   $return_data   The response object.
         */
        public function rest_handler_update_options( $request ) {

            $return_data = array(
                'success' => false,
                'message' => __( 'Ooops, error saving settings!!!', 'addonify-quick-view' ),
            );

            $params = $request->get_params(); 

            if ( addonify_quick_view_update_settings_fields_values( $params ) === true ) {

                $return_data['success'] = true;
                $return_data['message'] = __( 'Settings saved successfully', 'addonify-quick-view' );
            } 

            return rest_ensure_response( $return_data );
        }
    }
}