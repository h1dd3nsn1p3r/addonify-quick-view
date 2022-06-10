<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action( 'rest_api_init', 'addonify_quick_view_api_init' );

function addonify_quick_view_api_init() {

    $namespace = 'addonify_quick_view_options_api';

    register_rest_route(
        $namespace,
        '/get_options',
        array(
            array(
                'methods'   => 'GET',
                'permission_callback' => '__return_true',
                'callback'  => 'addonify_quick_view_get_options'
            )
        )
    );

    register_rest_route(
        $namespace,
        '/update_options',
        array(
            array(
                'methods'   => \WP_REST_Server::CREATABLE,
                'callback'  => 'addonify_quick_view_update_options_rest_handler',
                'permission_callback' => '__return_true'
            )
        )
    );
}


function addonify_quick_view_settings_defaults() {

    $defaults = [
        // Options
        'enable_quick_view' => false,
        'quick_view_btn_position' => 'after_add_to_cart_button',
        'quick_view_btn_label' => __( 'Quick view', 'addonify-quick-view' ),
        'modal_box_content' => serialize(['image', 'title', 'price', 'add_to_cart', 'rating' ]),
        'product_thumbnail' => 'product_image_only',
        'enable_lightbox' => false,
        'display_read_more_button' => false,
        'read_more_button_label' => __( 'View Detail', 'addonify-quick-view' ),
        // Styles
        'enable_plugin_styles' => false,
        'modal_box_overlay_background_color' => 'rgba(255, 255, 255, 0.95)',
        'modal_box_background_color' => 'rgba(255, 255, 255, 1)',
        'product_title_color' => 'rgba(0, 0, 0, 1)',
        'product_rating_star_empty_color' => 'rgba(147, 147, 147, 1)',
        'product_rating_star_filled_color' => 'rgba(245, 196, 14, 1)',
        'product_price_color' => 'rgba(0, 0, 0, 1)',
        'product_on_sale_price_color' => 'rgba(255, 0, 0, 1)',
        'product_excerpt_text_color' => 'rgba(0, 0, 0, 1)',
        'product_meta_text_color' => 'rgba(0, 0, 0, 1)',
        'product_meta_text_hover_color' => 'rgba(2, 134, 231, 1)',
        'modal_close_button_text_color' => 'rgba(0, 0, 0, 1)',
        'modal_close_button_text_hover_color' => 'rgba(2, 134, 231, 1)',
        'modal_close_button_background_color' => 'rgba(255, 255, 255, 0)',
        'modal_close_button_background_hover_color' => 'rgba(255, 255, 255, 0)',
        'modal_misc_buttons_text_color' => 'rgba(255, 255, 255, 1)',
        'modal_misc_buttons_text_hover_color' => 'rgba(255, 255, 255, 1)',
        'modal_misc_buttons_background_color' => 'rgba(0, 0, 0, 1)',
        'modal_misc_buttons_background_hover_color' => 'rgba(2, 134, 231, 1)',
        // Custom CSS
        'custom_css' => '',
    ];

    return $defaults;
}


function addonify_quick_view_settings_values() {

    //$defaults = addonify_quick_view_settings_defaults();

    //$saved_values = [];

    //foreach ( $defaults as $key => $value ) {
            
    //    $saved_values[ $key ] = addonify_quick_view_get_setting( $key );
    //}

    //return $saved_values;

    return addonify_quick_view_get_setting();
}


function addonify_quick_view_settings_fields() {

    $settings_fields = [];

    return apply_filters( 'addonify_quick_view/settings_fields', $settings_fields );
}

add_filter( 'addonify_quick_view/settings_fields', 'addonify_quick_view_general_section_setting_fields' );
function addonify_quick_view_general_section_setting_fields( $settings_fields ) {

    $section_setting_fields = addonify_quick_view_get_general_option_fields();

    $settings_fields = array_merge( $settings_fields, $section_setting_fields );

    return $settings_fields;
}


add_filter( 'addonify_quick_view/settings_fields', 'addonify_quick_view_button_section_setting_fields' );
function addonify_quick_view_button_section_setting_fields( $settings_fields ) {

    $section_setting_fields = addonify_quick_view_get_button_fields();

    $settings_fields = array_merge( $settings_fields, $section_setting_fields );

    return $settings_fields;
}


function addonify_quick_view_get_setting( $setting_id = '' ) {

    $setting_fields = addonify_quick_view_settings_fields();

    //var_dump( $setting_fields );

    $defaults = addonify_quick_view_settings_defaults();

    if ( $setting_id ) {
        
        return get_option( ADDONIFY_DB_INITIALS . $setting_id, $defaults[ $setting_id ] );
    } else {

        $key_values = [];

        foreach ( $setting_fields as $key => $value ) {

            $field_type = $value['type'];

            if (  isset( $defaults[ $key ] ) ) {

                switch ( $field_type ) {
                    case 'text':
                        $key_values[ $key ] = get_option( ADDONIFY_DB_INITIALS . $key, $defaults[ $key ] );
                        break;
                    case 'checkbox':
                        $multi = ( isset( $value[ 'multi' ] )  && $value['multi'] == true ) ? true : false;

                        if ( $multi ) {
                            $key_values[ $key ] = ( get_option( ADDONIFY_DB_INITIALS . $key, $defaults[ $key ] ) ) ? unserialize( get_option( ADDONIFY_DB_INITIALS . $key, $defaults[ $key ] ) ): [];
                        } else {
                            $key_values[ $key ] = ( get_option( ADDONIFY_DB_INITIALS . $key, $defaults[ $key ] ) == '1' ) ? true : false;
                        }
                        
                        break;
                    case 'select':
                        $key_values[ $key ] = ( get_option( ADDONIFY_DB_INITIALS . $key, $defaults[ $key ] ) == '' ) ? 'Choose value' : get_option( ADDONIFY_DB_INITIALS . $key, $defaults[ $key ] );
                        break;
                    default:
                        $key_values[ $key ] = get_option( ADDONIFY_DB_INITIALS . $key, $defaults[ $key ] );
                }    
            }    
        }  

        return $key_values;
    }

    

    //if ( $setting_id ) {

    //    return get_option( ADDONIFY_DB_INITIALS . $setting_id, $defaults[ $setting_id ] );
    //}
}

/**
*
* @Page Options
* @Type settings
*/

function addonify_quick_view_get_general_option_fields() {

    $fields = [
        'enable_quick_view' => [
           
            'type'            => 'checkbox',
        ],
    ];

    return $fields;
}

function addonify_quick_view_get_button_fields() {

    $fields = [
        'quick_view_btn_position' => [
            'type'  => 'select',
            'choices' => [
                'after_add_to_cart_button' => __( 'After add to cart button', 'addonify-quick-view' ),
                'before_add_to_cart_button' => __( 'Before add to cart button', 'addonify-quick-view' )
            ]
        ],

        'quick_view_btn_label' => [
            'type'  => 'text',
        ]
    ];

    return $fields;
}

function addonify_quick_view_modal_box_content_choices() {}

if ( ! function_exists( 'addonify_quick_view_get_modal_box_fields' ) ) {
    function addonify_quick_view_get_modal_box_fields() {

        $fields = [
            'modal_box_content' => [
                
                'type'  => 'checkbox',
                'multi' => true,
                'choices' => [
                    'image' => __( 'Image', 'addonify-quick-view' ),
                    'title' => __( 'Title', 'addonify-quick-view' ),
                    'price' => __( 'Price', 'addonify-quick-view' ),
                    'rating' => __( 'Rating', 'addonify-quick-view' ),
                    'excerpt' => __( 'Excerpt', 'addonify-quick-view' ),
                    'meta' => __( 'Meta', 'addonify-quick-view' ),
                    'add_to_cart' => __( 'Add to Cart', 'addonify-quick-view' ),
                ]
            ],

            'product_thumbnail' => [
               
                'type'  => 'select',
                'choices' => [
                    'product_image_only' => __( 'Product image only', 'addonify-quick-view' ),
                    'product_image_or_gallery' => __( 'Product image or gallery', 'addonify-quick-view' ),
                ]
            ],

            'enable_lightbox' => [
                
                'type'  => 'checkbox'
            ],

            'display_read_more_button' => [
                
                'type'  => 'checkbox'
            ],
        ];

        return $fields;
    }

    add_filter( 'addonify_quick_view/settings_fields', function( $fields ) {

        $modal_box_fields = addonify_quick_view_get_modal_box_fields();

        $fields = array_merge( $fields, $modal_box_fields );

        return $fields;
    } );
}


/**
*
* @ Page Styles
* @ Type settings
*/

function addonify_quick_view_get_general_styles() {

    $fields = [
        'enable_plugin_styles' => [
            
            'type'              => 'checkbox',
        ],
    ];

    return $fields;
}
add_filter( 'addonify_quick_view/settings_fields', function( $fields ) {

    $modal_box_fields = addonify_quick_view_get_general_styles();

    $fields = array_merge( $fields, $modal_box_fields );

    return $fields;
});


function addonify_quick_view_get_modal_styles() {

    $fields = [
        'modal_box_overlay_background_color' => [
            
            'type'            => 'text',
        ],
        'modal_box_background_color' => [
            
            'type'            => 'text',
        ],
    ];

    return $fields;
}

add_filter( 'addonify_quick_view/settings_fields', function( $fields ) {

    $modal_box_fields = addonify_quick_view_get_modal_styles();

    $fields = array_merge( $fields, $modal_box_fields );

    return $fields;
});


function addonify_quick_view_get_modal_box_product_styles() {

    $fields = [

        'product_title_color' => [
            
            'type'            => 'text', 
        ],
        'product_rating_star_empty_color' => [
            
            'type'            => 'text', 
        ],
        'product_rating_star_filled_color' => [
            
            'type'            => 'text', 
        ],
        'product_price_color' => [
           
            'type'            => 'text', 
        ],
        'product_on_sale_price_color' => [
            
            'type'            => 'text', 
        ],
        'product_excerpt_text_color' => [
            
            'description'     => '',
            'type'            => 'text', 
        ],
        'product_meta_text_color' => [
           
            'type'            => 'text',
        ],
        'product_meta_text_hover_color' => [
            
            'type'            => 'text', 
        ],
    ];

    return $fields;
}

add_filter( 'addonify_quick_view/settings_fields', function( $fields ) {

    $modal_box_fields = addonify_quick_view_get_modal_box_product_styles();

    $fields = array_merge( $fields, $modal_box_fields );

    return $fields;
});


function addonify_quick_view_get_modal_close_button_styles() {

    $fields = [

        'modal_close_button_text_color' => [
           
            'type'            => 'text',
        ],
        'modal_close_button_text_hover_color' => [
            
            'type'            => 'text', 
        ],
        'modal_close_button_background_color' => [
           
            'type'            => 'text', 
        ],
        'modal_close_button_background_hover_color' => [
           
            'type'            => 'text', 
        ],
    ];

    return $fields;
}

add_filter( 'addonify_quick_view/settings_fields', function( $fields ) {

    $modal_box_fields = addonify_quick_view_get_modal_close_button_styles();

    $fields = array_merge( $fields, $modal_box_fields );

    return $fields;
});


function addonify_quick_view_get_modal_misc_button_styles() {

    $fields = [

         'modal_misc_buttons_text_color' => [
           
            'type'            => 'text',
        ],
        'modal_misc_buttons_text_hover_color' => [
           
            'type'            => 'text', 
        ],
        'modal_misc_buttons_background_color' => [
            
            'type'            => 'text', 
        ],
        'modal_misc_buttons_background_hover_color' => [
            
            'type'            => 'text', 
        ],
    ];

    return $fields;
}

add_filter( 'addonify_quick_view/settings_fields', function( $fields ) {

    $modal_box_fields = addonify_quick_view_get_modal_misc_button_styles();

    $fields = array_merge( $fields, $modal_box_fields );

    return $fields;
});


function addonify_quick_view_get_custom_css_box() {

    $fields = [
        'custom_css' => [
           
            'type'              => 'textarea',
        ],
    ];

    return $fields;
}

add_filter( 'addonify_quick_view/settings_fields', function( $fields ) {

    $modal_box_fields = addonify_quick_view_get_custom_css_box();

    $fields = array_merge( $fields, $modal_box_fields );

    return $fields;
});

/**
*
* All settings, styles and recommended plugins fields.
*
*/

function addonify_quick_view_get_options() {

    $options = [
        'settings_values' => addonify_quick_view_settings_values(),
        'tabs' => [
            'settings' => [
                'sections' => [
                    'general' => [
                        
                        'fields' => addonify_quick_view_get_general_option_fields(),
                    ],
                    'button' => [
                        
                        'fields' => addonify_quick_view_get_button_fields(),
                    ],
                    'modal' => [
                        
                        'fields' => addonify_quick_view_get_modal_box_fields(),
                    ]
                ]
            ],
            'styles' => [
                'sections' => [
                    'general' => [
                        
                        'fields' => addonify_quick_view_get_general_styles(),
                    ],
                    'modal' => [
                      
                        'fields' => addonify_quick_view_get_modal_styles(),
                    ],
                    'product' => [
                        
                        'fields' => addonify_quick_view_get_modal_box_product_styles(),
                    ],
                    'close_button' => [
                        
                        'fields' => addonify_quick_view_get_modal_close_button_styles(),
                    ],
                    'misc_buttons' => [
                       
                        'fields' => addonify_quick_view_get_modal_misc_button_styles(),
                    ],
                    'custom_css' => [
                        
                        'fields' => addonify_quick_view_get_custom_css_box(), 
                    ]
                ]
            ],
            'products' => [
                'recommended' => [

                    // Recommend plugins here.
                    
                ]
            ],
        ],
    ];

    //$options = json_encode( $options );

    return $options;    
}

function sanitize_multi_choices( $args ) {
    
    $saved_values = [];

    if ( is_array( $args['choices'] ) && count( $args['choices'] ) && is_array( $args['values'] ) && count( $args['values'] ) ) {
        foreach ( $args['values'] as $value ) {
            if ( array_key_exists( $value, $args['choices'] ) ) {
                $saved_values[] = $value;
            }
        }
    }

    return $saved_values;
}


function addonify_quick_view_update_settings( $settings ) {

    if ( is_array( $settings ) && count( $settings ) > 0 ) {

        $defaults = addonify_quick_view_settings_defaults();

        $settings_fields = addonify_quick_view_settings_fields();

        foreach ( $settings as $key => $value ) {

            if ( array_key_exists( $key, $settings_fields ) ) {

                $setting_field_type = $settings_fields[ $key ][ 'type' ];

                switch ( $setting_field_type ) {
                    case 'checkbox':
                        $is_multi = ( isset( $settings_fields[ $key ][ 'multi' ] ) && $settings_fields[ $key ][ 'multi' ] == true ) ? true : false;

                        //return $settings_fields[ $key ][ 'multi' ];

                        if ( $is_multi ) {
                            $sanitize_args = [
                                'choices' => $settings_fields[$key]['choices'],
                                'values' => $value
                            ];
                            $value = sanitize_multi_choices( $sanitize_args );
                            $value = serialize( $value );
                        } else {
                            $value = wp_validate_boolean( $value );
                        }                        
                        break;
                    case 'text':
                        $value = sanitize_text_field( $value );
                        break;
                    case 'select':
                        $choices = $settings_fields[ $key ][ 'choices' ];
                        if ( array_key_exists( $value, $choices ) ) {
                            $value = sanitize_text_field( $value );
                        } else {
                            $value = $defaults[ $key ];
                        }
                        break;
                    default:
                        $value = sanitize_text_field( $value );
                        break;
                }

                
            }

            if ( ! update_option( ADDONIFY_DB_INITIALS . $key, $value ) ) {
                return false;
            }
        }

        return true;
    }
}


function addonify_quick_view_update_options_rest_handler( $request ) {

    $return_data = [
        'success' => false,
        'message' => __('Ooops, error saving settings!!!', 'addonify-quick-view' ),
    ];

    $params = $request->get_params(); 

    //$params = json_decode( $params, true );

    if ( addonify_quick_view_update_settings( $params ) === true ) {
        $return_data['success'] = true;
        $return_data['message'] = __('Settings saved successfully', 'addonify-quick-view' );
    } 

    return rest_ensure_response( $return_data );

    //return $params;
}