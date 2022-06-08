<?php

add_action( 'rest_api_init', 'addonify_quick_view_api_init' );

function addonify_quick_view_api_init() {

    $namespace = 'addonify_quick_view_options_api/';

    register_rest_route(
        $namespace,
        'get_options',
        array(
            array(
                'methods'   => 'GET',
                'callback'  => 'addonify_quick_view_get_options'
            )
        )
    );

    register_rest_route(
        $namespace,
        'update_options',
        array(
            array(
                'methods'   => \WP_REST_Server::CREATABLE,
                'callback'  => 'addonify_quick_view_update_options_rest_handler',
                //'permission_callback' => function() {
                //    return current_user_can( 'manage_options' );
                //}
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
        // Styles
        'enable_plugin_styles' => false,
        'modal_box_overlay_background_color' => 'rgba(0, 0, 0, 0.8)',
        'modal_box_background_color' => 'rgba(255, 255, 255, 1)',
        'product_title_color' => 'rgba(0, 0, 0, 1)',
        'product_rating_star_empty_color' => 'rgba(147, 147, 147, 1)',
        'product_rating_star_filled_color' => 'rgba(245, 196, 14, 1)',
        'product_price_color' => 'rgba(0, 0, 0, 1)',
        'product_on_sale_price_color' => 'rgba(255, 0, 0, 1)',
        'product_excerpt_text_color' => 'rgba(0, 0, 0, 1)',
        'product_meta_text_color' => 'rgba(0, 0, 0, 1)',
        'product_meta_text_hover_color' => 'rgba(2, 134, 231, 1)',
        'modal_close_button_text_color' => 'rgba(255, 255, 255, 1)',
        'modal_close_button_text_hover_color' => 'rgba(255, 255, 255, 1)',
        'modal_close_button_background_color' => 'rgba(0, 0, 0, 1)',
        'modal_close_button_background_hover_color' => 'rgba(2, 134, 231, 1)',
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
            'label'			=> __('Enable quick view', 'addonify-quick-view' ),
            'description'     => 'Once enabled, it will be visible in product catalog.',
            'type'            => 'checkbox',
        ],
    ];

    return $fields;
}

function addonify_quick_view_get_button_fields() {

    $fields = [
        'quick_view_btn_position' => [
            'label' => __('Button position', 'addonify-quick-view' ),
            'description' => 'Choose where you want to show the quick view button.',
            'type'  => 'select',
            'choices' => [
                'after_add_to_cart_button' => __( 'After add to cart button', 'addonify-quick-view' ),
                'before_add_to_cart_button' => __( 'Before add to cart button', 'addonify-quick-view' ),
            ]
        ],

        'quick_view_btn_label' => [
            'label' => __('Button label', 'addonify-quick-view' ),
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
                'label' => __('Content to display', 'addonify-quick-view' ),
                'description' => 'Which content would you like to display on quick view modal.',
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
                'label' => __('Product thumbnail', 'addonify-quick-view' ),
                'description' => 'Choose whether you want to display single product image or gallery in quick view modal.',
                'type'  => 'select',
                'choices' => [
                    'product_image_only' => __( 'Product image only', 'addonify-quick-view' ),
                    'product_image_or_gallery' => __( 'Product image or gallery', 'addonify-quick-view' ),
                ]
            ],

            'enable_lightbox' => [
                'label' => __('Enable lightbox', 'addonify-quick-view' ),
                'description' => 'Enable lightbox for product images in quick view modal.',
                'type'  => 'checkbox'
            ],

            'display_read_more_button' => [
                'label' => __('Display view detail button', 'addonify-quick-view' ),
                'description' => 'Enable display view detail button in modal.',
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
            'label'			    => __('Enable pugin styles', 'addonify-quick-view' ),
            'description'       => __( 'If enabled, the colors selected below will be applied to the quick view modal & elements.', 'addonify-quick-view' ),
            'badge'             => __('Optional', 'addonify-quick-view' ),
            'tooltip'           => __('If enabled you may experience issue with your theme styles.', 'addonify-quick-view' ),
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
            'label'           => __('Modal overlay background', 'addonify-quick-view' ),
            'type'            => 'text',
        ],
        'modal_box_background_color' => [
            'label'			  => __('Modal box inner background', 'addonify-quick-view' ),
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
            'label'			  => __('Title text', 'addonify-quick-view'),
            'description'     => '',
            'type'            => 'text', 
        ],
        'product_rating_star_empty_color' => [
            'label'			  => __('Rating star empty', 'addonify-quick-view'),
            'type'            => 'text', 
        ],
        'product_rating_star_filled_color' => [
            'label'			  => __('Rating star filled', 'addonify-quick-view'),
            'type'            => 'text', 
        ],
        'product_price_color' => [
            'label'			  => __('Regular price', 'addonify-quick-view'),
            'type'            => 'text', 
        ],
        'product_on_sale_price_color' => [
            'label'			  => __('On-sale price', 'addonify-quick-view'),
            'type'            => 'text', 
        ],
        'product_excerpt_text_color' => [
            'label'			  => __('Excerpt text', 'addonify-quick-view'),
            'description'     => '',
            'type'            => 'text', 
        ],
        'product_meta_text_color' => [
            'label'			  => __('Meta text', 'addonify-quick-view'),
            'type'            => 'text',
        ],
        'product_meta_text_hover_color' => [
            'label'			  => __('Meta text on hover', 'addonify-quick-view'),
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
            'label'			=> __('Default text', 'addonify-quick-view'),
            'type'            => 'text',
        ],
        'modal_close_button_text_hover_color' => [
            'label'			  => __('Text on mouse hover', 'addonify-quick-view'),
            'type'            => 'text', 
        ],
        'modal_close_button_background_color' => [
            'label'			  => __('Default background', 'addonify-quick-view'),
            'type'            => 'text', 
        ],
        'modal_close_button_background_hover_color' => [
            'label'			  => __('Background on mouse hover', 'addonify-quick-view'),
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
            'label'			  => __('Default text', 'addonify-quick-view'),
            'type'            => 'text',
        ],
        'modal_misc_buttons_text_hover_color' => [
            'label'			  => __('Text on mouse hover', 'addonify-quick-view'),
            'type'            => 'text', 
        ],
        'modal_misc_buttons_background_color' => [
            'label'			  => __('Default background', 'addonify-quick-view'),
            'type'            => 'text', 
        ],
        'modal_misc_buttons_background_hover_color' => [
            'label'			  => __('Background on mouse hover', 'addonify-quick-view'),
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
            'label'			    => __('Custom CSS', 'addonify-quick-view' ),
            'description'       => __('If required, you may add your own custom CSS code here.', 'addonify-quick-view' ),
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
                        'title' => __('General', 'addonify-quick-view' ),
                        'description' => '',
                        'fields' => addonify_quick_view_get_general_option_fields(),
                    ],
                    'button' => [
                        'title' => __('Button Options', 'addonify-quick-view' ),
                        'description' => '',
                        'fields' => addonify_quick_view_get_button_fields(),
                    ],
                    'modal' => [
                        'title' => __('Modal Box Options', 'addonify-quick-view' ),
                        'description' => '',
                        'fields' => addonify_quick_view_get_modal_box_fields(),
                    ]
                ]
            ],
            'styles' => [
                'sections' => [
                    'general' => [
                        'title' => __('General', 'addonify-quick-view' ),
                        'description' => '',
                        'fields' => addonify_quick_view_get_general_styles(),
                    ],
                    'modal' => [
                        'title' => __('Modal Box Colors', 'addonify-quick-view' ),
                        'description' => 'Change the colors of modal box & overlay
								background.',
                        'fields' => addonify_quick_view_get_modal_styles(),
                    ],
                    'product' => [
                        'title' => __('Product Info Colors', 'addonify-quick-view' ),
                        'description' => 'Change the way the product title, meta, excerpt & price looks on modal.',
                        'fields' => addonify_quick_view_get_modal_box_product_styles(),
                    ],
                    'close_button' => [
                        'title' => __('Close Button Colors', 'addonify-quick-view' ),
                        'description' => 'Change the look & feel of close modal box button.',
                        'fields' => addonify_quick_view_get_modal_close_button_styles(),
                    ],
                    'misc_buttons' => [
                        'title' => __('Miscellaneous Buttons Colors', 'addonify-quick-view' ),
                        'description' => 'Tweak how miscellaneous buttons look on modal box.',
                        'fields' => addonify_quick_view_get_modal_misc_button_styles(),
                    ],
                    'custom_css' => [
                        'title' => __('Developer', 'addonify-quick-view' ),
                        'description' => '',
                        'fields' => addonify_quick_view_get_custom_css_box(), 
                    ]
                ]
            ],
            'products' => [
                'recommended' => [

                    // Recommend plugins here.
                    'content' => __('Coming soon....', 'addonify-quick-view' ),
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