import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

/**
 * AnimatedItem component to add entrance animations to any element
 * 
 * @param {Object} props Component props
 * @param {ReactNode} props.children Content to be animated
 * @param {string} props.animation Animation type: 'fade-up', 'fade-in', 'slide