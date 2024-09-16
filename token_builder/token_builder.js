const express = require('express');
const {RtcTokenBuilder, RtcRole} = require('agora-access-token');
const dotenv = require('dotenv');
const router=express.Router();


const nocache = (_, resp, next) => {
  resp.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  resp.header('Expires', '-1');
  resp.header('Pragma', 'no-cache');
  next();
}

const generateRTCToken = (req, resp) => {
    
  resp.header('Access-Control-Allow-Origin', '*');
  
  const generateRTCToken = (req, resp) => {
      
  resp.header('Access-Control-Allow-Origin', '*');
  
  const channelName = req.params.channel;
  
  if (!channelName) {
    return resp.status(500).json({ 'error': 'channel is required' });
  }
  }
}