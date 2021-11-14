import './css/SiteBranding.css';
import './css/SiteBranding-700.css';
import React from 'react';
import {Link} from 'react-router-dom';


const SiteBranding = props => {
    return (
        <div id="site-branding">
            <Link to={'/'} className="nav-link">
                <img width="1000" height="300" src="https://i0.wp.com/erinbirum.studio/wp-content/uploads/2021/01/cropped-EBS_Logo_RGB-3.png?fit=1610%2C300&amp;ssl=1" className="custom-logo jetpack-lazy-image jetpack-lazy-image--handled" alt="Erin Birum Studio" data-attachment-id="671" data-permalink="https://erinbirum.studio/cropped-ebs_logo_rgb-3-png/" data-orig-file="https://i0.wp.com/erinbirum.studio/wp-content/uploads/2021/01/cropped-EBS_Logo_RGB-3.png?fit=1610%2C300&amp;ssl=1" data-orig-size="1610,300" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="cropped-EBS_Logo_RGB-3.png" data-image-description="<p>https://erinbirum.studio/wp-content/uploads/2021/01/cropped-EBS_Logo_RGB-3.png</p>" data-image-caption="" data-medium-file="https://i0.wp.com/erinbirum.studio/wp-content/uploads/2021/01/cropped-EBS_Logo_RGB-3.png?fit=300%2C56&amp;ssl=1" data-large-file="https://i0.wp.com/erinbirum.studio/wp-content/uploads/2021/01/cropped-EBS_Logo_RGB-3.png?fit=1000%2C187&amp;ssl=1" srcSet="https://i0.wp.com/erinbirum.studio/wp-content/uploads/2021/01/cropped-EBS_Logo_RGB-3.png?w=1610&amp;ssl=1 1610w, https://i0.wp.com/erinbirum.studio/wp-content/uploads/2021/01/cropped-EBS_Logo_RGB-3.png?resize=300%2C56&amp;ssl=1 300w, https://i0.wp.com/erinbirum.studio/wp-content/uploads/2021/01/cropped-EBS_Logo_RGB-3.png?resize=1024%2C191&amp;ssl=1 1024w, https://i0.wp.com/erinbirum.studio/wp-content/uploads/2021/01/cropped-EBS_Logo_RGB-3.png?resize=768%2C143&amp;ssl=1 768w, https://i0.wp.com/erinbirum.studio/wp-content/uploads/2021/01/cropped-EBS_Logo_RGB-3.png?resize=1536%2C286&amp;ssl=1 1536w, https://i0.wp.com/erinbirum.studio/wp-content/uploads/2021/01/cropped-EBS_Logo_RGB-3.png?resize=500%2C93&amp;ssl=1 500w, https://i0.wp.com/erinbirum.studio/wp-content/uploads/2021/01/cropped-EBS_Logo_RGB-3.png?resize=800%2C149&amp;ssl=1 800w, https://i0.wp.com/erinbirum.studio/wp-content/uploads/2021/01/cropped-EBS_Logo_RGB-3.png?resize=1280%2C239&amp;ssl=1 1280w, https://i0.wp.com/erinbirum.studio/wp-content/uploads/2021/01/cropped-EBS_Logo_RGB-3.png?resize=1200%2C224&amp;ssl=1 1200w, https://i0.wp.com/erinbirum.studio/wp-content/uploads/2021/01/cropped-EBS_Logo_RGB-3.png?resize=700%2C130&amp;ssl=1 700w" data-lazy-loaded="1" sizes="(max-width: 1610px) 100vw, 1610px" loading="eager" />
            </Link>
        </div>
    );
};

export default SiteBranding;