import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Server, Cloud, Database, DollarSign, CheckCircle, XCircle, AlertTriangle, Zap, Shield, Clock, Users, Monitor, Cpu, HardDrive } from 'lucide-react';

const slides = [
  'title',
  'overview',
  'livekit-comparison',
  'mongodb-comparison',
  'redis-comparison',
  'full-aws-architecture',
  'hybrid-architecture',
  'cost-comparison',
  'recommendation',
  'implementation-steps'
];

export default function InfrastructureDecision() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1));
  const prev = () => setCurrentSlide(prev => Math.max(prev - 1, 0));

  const renderSlide = () => {
    switch(slides[currentSlide]) {
      case 'title':
        return (
          <div className="h-full flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white p-8">
            <div className="text-6xl mb-4">🏗️</div>
            <h1 className="text-4xl font-bold mb-4">iMeetPro Infrastructure</h1>
            <h2 className="text-2xl text-blue-200 mb-6">Decision Guide: AWS vs Managed Services</h2>
            <div className="flex gap-4 mt-4">
              <div className="bg-blue-700/50 px-4 py-2 rounded-lg">
                <Server className="inline mr-2" size={20}/>Self-Hosted
              </div>
              <div className="text-2xl">vs</div>
              <div className="bg-indigo-700/50 px-4 py-2 rounded-lg">
                <Cloud className="inline mr-2" size={20}/>Managed Services
              </div>
            </div>
            <p className="text-blue-300 mt-8 text-sm">Production Deployment Ready • Cost Optimized</p>
          </div>
        );

      case 'overview':
        return (
          <div className="h-full bg-gray-50 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">Key Decisions Overview</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-lg shadow p-4 border-l-4 border-orange-500">
                <h3 className="font-bold text-orange-600 flex items-center gap-2">
                  <Monitor size={18}/>LiveKit (Video)
                </h3>
                <div className="mt-2 text-sm space-y-1">
                  <p className="text-gray-600">Option A: LiveKit Cloud</p>
                  <p className="text-gray-600">Option B: Self-host on AWS</p>
                </div>
                <p className="text-xs text-orange-500 mt-2 font-semibold">Most Critical Decision!</p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-4 border-l-4 border-green-500">
                <h3 className="font-bold text-green-600 flex items-center gap-2">
                  <Database size={18}/>MongoDB
                </h3>
                <div className="mt-2 text-sm space-y-1">
                  <p className="text-gray-600">Option A: MongoDB Atlas</p>
                  <p className="text-gray-600">Option B: Self-host on EKS</p>
                </div>
                <p className="text-xs text-green-500 mt-2 font-semibold">Medium Complexity</p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-4 border-l-4 border-purple-500">
                <h3 className="font-bold text-purple-600 flex items-center gap-2">
                  <Zap size={18}/>Redis Cache
                </h3>
                <div className="mt-2 text-sm space-y-1">
                  <p className="text-gray-600">Option A: AWS ElastiCache</p>
                  <p className="text-gray-600">Option B: Self-host on EKS</p>
                </div>
                <p className="text-xs text-purple-500 mt-2 font-semibold">Easy to Self-host</p>
              </div>
            </div>
            
            <div className="mt-4 bg-blue-50 rounded-lg p-4">
              <h3 className="font-bold text-blue-800 mb-2">AWS Services (Always Use)</h3>
              <div className="grid grid-cols-4 gap-2 text-sm">
                <div className="bg-white rounded p-2 text-center shadow-sm">
                  <p className="font-semibold text-blue-600">EKS</p>
                  <p className="text-xs text-gray-500">Kubernetes</p>
                </div>
                <div className="bg-white rounded p-2 text-center shadow-sm">
                  <p className="font-semibold text-blue-600">RDS MySQL</p>
                  <p className="text-xs text-gray-500">Primary DB</p>
                </div>
                <div className="bg-white rounded p-2 text-center shadow-sm">
                  <p className="font-semibold text-blue-600">S3</p>
                  <p className="text-xs text-gray-500">Storage</p>
                </div>
                <div className="bg-white rounded p-2 text-center shadow-sm">
                  <p className="font-semibold text-blue-600">CloudFront</p>
                  <p className="text-xs text-gray-500">CDN</p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <p className="text-yellow-800 text-sm flex items-center gap-2">
                <AlertTriangle size={16}/>
                <strong>Goal:</strong> Find best balance of Cost vs Complexity vs Reliability for 100→10,000 users
              </p>
            </div>
          </div>
        );

      case 'livekit-comparison':
        return (
          <div className="h-full bg-gray-50 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b-2 border-orange-500 pb-2">
              <Monitor className="inline mr-2" size={24}/>LiveKit: Cloud vs Self-Hosted
            </h2>
            
            <div className="grid grid-cols-2 gap-4 h-5/6">
              <div className="bg-white rounded-lg shadow p-4 border-2 border-green-500">
                <h3 className="font-bold text-green-600 text-lg mb-2 flex items-center gap-2">
                  <Cloud size={20}/>LiveKit Cloud ⭐ RECOMMENDED
                </h3>
                
                <div className="space-y-2 text-sm">
                  <div className="bg-green-50 p-2 rounded">
                    <p className="font-semibold text-green-700">Monthly Cost (1000 users)</p>
                    <p className="text-2xl font-bold text-green-600">$2,000</p>
                    <p className="text-xs text-gray-500">Based on usage: $0.004/min participant</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Pros:</p>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-1 text-green-600">
                        <CheckCircle size={14}/> Zero infrastructure management
                      </li>
                      <li className="flex items-center gap-1 text-green-600">
                        <CheckCircle size={14}/> Global edge network included
                      </li>
                      <li className="flex items-center gap-1 text-green-600">
                        <CheckCircle size={14}/> Auto-scaling built-in
                      </li>
                      <li className="flex items-center gap-1 text-green-600">
                        <CheckCircle size={14}/> 99.99% SLA guaranteed
                      </li>
                      <li className="flex items-center gap-1 text-green-600">
                        <CheckCircle size={14}/> 1 day setup time
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Cons:</p>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-1 text-red-500">
                        <XCircle size={14}/> Higher cost at scale
                      </li>
                      <li className="flex items-center gap-1 text-red-500">
                        <XCircle size={14}/> Less customization
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow p-4 border border-gray-300">
                <h3 className="font-bold text-gray-600 text-lg mb-2 flex items-center gap-2">
                  <Server size={20}/>Self-Hosted on AWS
                </h3>
                
                <div className="space-y-2 text-sm">
                  <div className="bg-gray-50 p-2 rounded">
                    <p className="font-semibold text-gray-700">Monthly Cost (1000 users)</p>
                    <p className="text-2xl font-bold text-gray-600">$1,200 - $1,800</p>
                    <p className="text-xs text-gray-500">EC2 + TURN servers + bandwidth</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Pros:</p>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-1 text-green-600">
                        <CheckCircle size={14}/> Lower cost at high scale
                      </li>
                      <li className="flex items-center gap-1 text-green-600">
                        <CheckCircle size={14}/> Full customization
                      </li>
                      <li className="flex items-center gap-1 text-green-600">
                        <CheckCircle size={14}/> Data stays in your AWS
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Cons:</p>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-1 text-red-500">
                        <XCircle size={14}/> Complex setup (2-3 weeks)
                      </li>
                      <li className="flex items-center gap-1 text-red-500">
                        <XCircle size={14}/> Need TURN/STUN servers
                      </li>
                      <li className="flex items-center gap-1 text-red-500">
                        <XCircle size={14}/> DevOps expertise required
                      </li>
                      <li className="flex items-center gap-1 text-red-500">
                        <XCircle size={14}/> You manage scaling
                      </li>
                      <li className="flex items-center gap-1 text-red-500">
                        <XCircle size={14}/> No SLA guarantee
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-2 bg-green-100 border border-green-300 rounded-lg p-2">
              <p className="text-green-800 text-sm font-semibold">
                💡 Verdict: Use LiveKit Cloud - Video infra is complex. Save 3 weeks setup time. Focus on your app!
              </p>
            </div>
          </div>
        );

      case 'mongodb-comparison':
        return (
          <div className="h-full bg-gray-50 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b-2 border-green-500 pb-2">
              <Database className="inline mr-2" size={24}/>MongoDB: Atlas vs Self-Hosted
            </h2>
            
            <div className="grid grid-cols-2 gap-4 h-5/6">
              <div className="bg-white rounded-lg shadow p-4 border border-gray-300">
                <h3 className="font-bold text-blue-600 text-lg mb-2 flex items-center gap-2">
                  <Cloud size={20}/>MongoDB Atlas
                </h3>
                
                <div className="space-y-2 text-sm">
                  <div className="bg-blue-50 p-2 rounded">
                    <p className="font-semibold text-blue-700">Monthly Cost (1000 users)</p>
                    <p className="text-2xl font-bold text-blue-600">$450 - $600</p>
                    <p className="text-xs text-gray-500">M30 cluster with replicas</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Pros:</p>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-1 text-green-600">
                        <CheckCircle size={14}/> Automated backups & PITR
                      </li>
                      <li className="flex items-center gap-1 text-green-600">
                        <CheckCircle size={14}/> Built-in monitoring
                      </li>
                      <li className="flex items-center gap-1 text-green-600">
                        <CheckCircle size={14}/> Easy scaling
                      </li>
                      <li className="flex items-center gap-1 text-green-600">
                        <CheckCircle size={14}/> 1-click setup
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Cons:</p>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-1 text-red-500">
                        <XCircle size={14}/> Higher cost
                      </li>
                      <li className="flex items-center gap-1 text-red-500">
                        <XCircle size={14}/> Data outside AWS VPC
                      </li>
                      <li className="flex items-center gap-1 text-red-500">
                        <XCircle size={14}/> Network latency
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow p-4 border-2 border-green-500">
                <h3 className="font-bold text-green-600 text-lg mb-2 flex items-center gap-2">
                  <Server size={20}/>Self-Hosted on EKS ⭐ RECOMMENDED
                </h3>
                
                <div className="space-y-2 text-sm">
                  <div className="bg-green-50 p-2 rounded">
                    <p className="font-semibold text-green-700">Monthly Cost (1000 users)</p>
                    <p className="text-2xl font-bold text-green-600">$150 - $250</p>
                    <p className="text-xs text-gray-500">3 replica StatefulSet on EKS</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Pros:</p>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-1 text-green-600">
                        <CheckCircle size={14}/> 60% cost savings
                      </li>
                      <li className="flex items-center gap-1 text-green-600">
                        <CheckCircle size={14}/> Same VPC - low latency
                      </li>
                      <li className="flex items-center gap-1 text-green-600">
                        <CheckCircle size={14}/> Full control
                      </li>
                      <li className="flex items-center gap-1 text-green-600">
                        <CheckCircle size={14}/> Helm chart available
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Cons:</p>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-1 text-red-500">
                        <XCircle size={14}/> Manual backup setup
                      </li>
                      <li className="flex items-center gap-1 text-red-500">
                        <XCircle size={14}/> Need monitoring config
                      </li>
                      <li className="flex items-center gap-1 text-red-500">
                        <XCircle size={14}/> 2-3 days setup
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-2 bg-green-100 border border-green-300 rounded-lg p-2">
              <p className="text-green-800 text-sm font-semibold">
                💡 Verdict: Self-host MongoDB on EKS - Easy with Helm, saves $300-400/month, better performance in same VPC
              </p>
            </div>
          </div>
        );

      case 'redis-comparison':
        return (
          <div className="h-full bg-gray-50 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b-2 border-purple-500 pb-2">
              <Zap className="inline mr-2" size={24}/>Redis: ElastiCache vs Self-Hosted
            </h2>
            
            <div className="grid grid-cols-2 gap-4 h-5/6">
              <div className="bg-white rounded-lg shadow p-4 border border-gray-300">
                <h3 className="font-bold text-orange-600 text-lg mb-2 flex items-center gap-2">
                  <Cloud size={20}/>AWS ElastiCache
                </h3>
                
                <div className="space-y-2 text-sm">
                  <div className="bg-orange-50 p-2 rounded">
                    <p className="font-semibold text-orange-700">Monthly Cost (1000 users)</p>
                    <p className="text-2xl font-bold text-orange-600">$780</p>
                    <p className="text-xs text-gray-500">cache.r6g.large, 2 shards, HA</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Pros:</p>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-1 text-green-600">
                        <CheckCircle size={14}/> Fully managed
                      </li>
                      <li className="flex items-center gap-1 text-green-600">
                        <CheckCircle size={14}/> Auto failover
                      </li>
                      <li className="flex items-center gap-1 text-green-600">
                        <CheckCircle size={14}/> Easy scaling
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Cons:</p>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-1 text-red-500">
                        <XCircle size={14}/> Expensive for what it is
                      </li>
                      <li className="flex items-center gap-1 text-red-500">
                        <XCircle size={14}/> Limited customization
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow p-4 border-2 border-green-500">
                <h3 className="font-bold text-green-600 text-lg mb-2 flex items-center gap-2">
                  <Server size={20}/>Self-Hosted on EKS ⭐ RECOMMENDED
                </h3>
                
                <div className="space-y-2 text-sm">
                  <div className="bg-green-50 p-2 rounded">
                    <p className="font-semibold text-green-700">Monthly Cost (1000 users)</p>
                    <p className="text-2xl font-bold text-green-600">$100 - $150</p>
                    <p className="text-xs text-gray-500">Redis cluster on existing EKS nodes</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Pros:</p>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-1 text-green-600">
                        <CheckCircle size={14}/> 80% cost savings!
                      </li>
                      <li className="flex items-center gap-1 text-green-600">
                        <CheckCircle size={14}/> Uses existing EKS capacity
                      </li>
                      <li className="flex items-center gap-1 text-green-600">
                        <CheckCircle size={14}/> Bitnami Helm chart - easy
                      </li>
                      <li className="flex items-center gap-1 text-green-600">
                        <CheckCircle size={14}/> Full Redis features
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Cons:</p>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-1 text-red-500">
                        <XCircle size={14}/> Manual HA setup
                      </li>
                      <li className="flex items-center gap-1 text-red-500">
                        <XCircle size={14}/> Need persistence config
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-2 bg-green-100 border border-green-300 rounded-lg p-2">
              <p className="text-green-800 text-sm font-semibold">
                💡 Verdict: Self-host Redis on EKS - Easiest self-host option, massive savings, Redis is simple to run
              </p>
            </div>
          </div>
        );

      case 'full-aws-architecture':
        return (
          <div className="h-full bg-gray-50 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b-2 border-blue-500 pb-2">
              Option A: Full AWS (Everything Self-Hosted)
            </h2>
            
            <div className="bg-white rounded-lg shadow p-4 mb-3">
              <div className="flex items-center justify-between text-sm">
                <div className="text-center p-2 bg-blue-100 rounded">
                  <Users size={24} className="mx-auto text-blue-600"/>
                  <p className="font-semibold">Users</p>
                </div>
                <div className="text-2xl text-gray-400">→</div>
                <div className="text-center p-2 bg-orange-100 rounded">
                  <p className="font-semibold text-orange-600">CloudFront</p>
                  <p className="text-xs">CDN</p>
                </div>
                <div className="text-2xl text-gray-400">→</div>
                <div className="text-center p-2 bg-green-100 rounded">
                  <p className="font-semibold text-green-600">ALB</p>
                  <p className="text-xs">Load Balancer</p>
                </div>
                <div className="text-2xl text-gray-400">→</div>
                <div className="text-center p-2 bg-purple-100 rounded border-2 border-purple-400">
                  <p className="font-semibold text-purple-600">EKS Cluster</p>
                  <p className="text-xs">All Services</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-purple-50 rounded-lg p-3">
                <h3 className="font-bold text-purple-700 mb-2">EKS Contains:</h3>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-white rounded p-2">✓ React Frontend</div>
                  <div className="bg-white rounded p-2">✓ Django Backend</div>
                  <div className="bg-white rounded p-2">✓ LiveKit Server</div>
                  <div className="bg-white rounded p-2">✓ TURN/STUN</div>
                  <div className="bg-white rounded p-2">✓ MongoDB</div>
                  <div className="bg-white rounded p-2">✓ Redis</div>
                  <div className="bg-white rounded p-2">✓ GPU Workers</div>
                  <div className="bg-white rounded p-2">✓ Celery</div>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-3">
                <h3 className="font-bold text-blue-700 mb-2">AWS Managed:</h3>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-white rounded p-2">✓ RDS MySQL</div>
                  <div className="bg-white rounded p-2">✓ S3 Storage</div>
                  <div className="bg-white rounded p-2">✓ CloudFront</div>
                  <div className="bg-white rounded p-2">✓ Route 53</div>
                  <div className="bg-white rounded p-2">✓ ECR</div>
                  <div className="bg-white rounded p-2">✓ ACM (SSL)</div>
                </div>
              </div>
            </div>
            
            <div className="mt-3 grid grid-cols-3 gap-3 text-center">
              <div className="bg-green-100 rounded-lg p-2">
                <p className="text-2xl font-bold text-green-600">$4,500</p>
                <p className="text-xs text-gray-600">Monthly (1K users)</p>
              </div>
              <div className="bg-red-100 rounded-lg p-2">
                <p className="text-2xl font-bold text-red-600">4-5 weeks</p>
                <p className="text-xs text-gray-600">Setup Time</p>
              </div>
              <div className="bg-yellow-100 rounded-lg p-2">
                <p className="text-2xl font-bold text-yellow-600">High</p>
                <p className="text-xs text-gray-600">Complexity</p>
              </div>
            </div>
            
            <div className="mt-2 bg-yellow-50 border border-yellow-300 rounded p-2">
              <p className="text-yellow-800 text-xs">
                ⚠️ Requires: Expert DevOps, TURN server setup, video streaming knowledge, 24/7 monitoring
              </p>
            </div>
          </div>
        );

      case 'hybrid-architecture':
        return (
          <div className="h-full bg-gray-50 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b-2 border-green-500 pb-2">
              Option B: Hybrid (Recommended) ⭐
            </h2>
            
            <div className="bg-white rounded-lg shadow p-4 mb-3">
              <div className="flex items-center justify-between text-sm">
                <div className="text-center p-2 bg-blue-100 rounded">
                  <Users size={24} className="mx-auto text-blue-600"/>
                  <p className="font-semibold">Users</p>
                </div>
                <div className="text-2xl text-gray-400">→</div>
                <div className="text-center p-2 bg-orange-100 rounded">
                  <p className="font-semibold text-orange-600">CloudFront</p>
                </div>
                <div className="text-2xl text-gray-400">→</div>
                <div className="text-center p-2 bg-green-100 rounded">
                  <p className="font-semibold text-green-600">ALB</p>
                </div>
                <div className="text-2xl text-gray-400">→</div>
                <div className="text-center p-2 bg-purple-100 rounded">
                  <p className="font-semibold text-purple-600">EKS</p>
                </div>
                <div className="text-2xl text-gray-400">↔</div>
                <div className="text-center p-2 bg-pink-100 rounded border-2 border-pink-400">
                  <p className="font-semibold text-pink-600">LiveKit</p>
                  <p className="text-xs">Cloud</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-purple-50 rounded-lg p-3">
                <h3 className="font-bold text-purple-700 mb-2 text-sm">EKS (Self-Hosted):</h3>
                <div className="space-y-1 text-xs">
                  <div className="bg-white rounded p-1">✓ React Frontend</div>
                  <div className="bg-white rounded p-1">✓ Django Backend</div>
                  <div className="bg-white rounded p-1">✓ MongoDB</div>
                  <div className="bg-white rounded p-1">✓ Redis</div>
                  <div className="bg-white rounded p-1">✓ GPU Workers</div>
                  <div className="bg-white rounded p-1">✓ Celery</div>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-3">
                <h3 className="font-bold text-blue-700 mb-2 text-sm">AWS Managed:</h3>
                <div className="space-y-1 text-xs">
                  <div className="bg-white rounded p-1">✓ RDS MySQL</div>
                  <div className="bg-white rounded p-1">✓ S3 Storage</div>
                  <div className="bg-white rounded p-1">✓ CloudFront CDN</div>
                  <div className="bg-white rounded p-1">✓ Route 53</div>
                  <div className="bg-white rounded p-1">✓ ECR Registry</div>
                  <div className="bg-white rounded p-1">✓ ACM SSL</div>
                </div>
              </div>
              
              <div className="bg-pink-50 rounded-lg p-3">
                <h3 className="font-bold text-pink-700 mb-2 text-sm">External:</h3>
                <div className="space-y-1 text-xs">
                  <div className="bg-white rounded p-1 border-2 border-pink-300">
                    ✓ LiveKit Cloud
                    <p className="text-gray-500">Video/Audio/TURN</p>
                  </div>
                </div>
                <p className="text-xs text-pink-600 mt-2">Already using: wss://imeetpro-fbrcr2mk.livekit.cloud</p>
              </div>
            </div>
            
            <div className="mt-3 grid grid-cols-3 gap-3 text-center">
              <div className="bg-green-100 rounded-lg p-2">
                <p className="text-2xl font-bold text-green-600">$5,100</p>
                <p className="text-xs text-gray-600">Monthly (1K users)</p>
              </div>
              <div className="bg-green-100 rounded-lg p-2">
                <p className="text-2xl font-bold text-green-600">2 weeks</p>
                <p className="text-xs text-gray-600">Setup Time</p>
              </div>
              <div className="bg-green-100 rounded-lg p-2">
                <p className="text-2xl font-bold text-green-600">Medium</p>
                <p className="text-xs text-gray-600">Complexity</p>
              </div>
            </div>
            
            <div className="mt-2 bg-green-50 border border-green-300 rounded p-2">
              <p className="text-green-800 text-xs">
                ✅ Best Balance: LiveKit handles complex video. You focus on your app. MongoDB/Redis easy on EKS.
              </p>
            </div>
          </div>
        );

      case 'cost-comparison':
        return (
          <div className="h-full bg-gray-50 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b-2 border-green-500 pb-2">
              <DollarSign className="inline" size={24}/>Complete Cost Comparison
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm bg-white rounded-lg shadow">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="p-2 text-left">Service</th>
                    <th className="p-2 text-center">Full AWS</th>
                    <th className="p-2 text-center bg-green-700">Hybrid ⭐</th>
                    <th className="p-2 text-center">All Managed</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2 font-semibold">EKS + EC2 Nodes</td>
                    <td className="p-2 text-center">$1,200</td>
                    <td className="p-2 text-center bg-green-50">$993</td>
                    <td className="p-2 text-center">$993</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-2 font-semibold">GPU Workers</td>
                    <td className="p-2 text-center">$1,140</td>
                    <td className="p-2 text-center bg-green-50">$1,140</td>
                    <td className="p-2 text-center">$1,140</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-semibold">LiveKit</td>
                    <td className="p-2 text-center text-orange-600">$400 (self)</td>
                    <td className="p-2 text-center bg-green-50">$2,000 (cloud)</td>
                    <td className="p-2 text-center">$2,000 (cloud)</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-2 font-semibold">RDS MySQL</td>
                    <td className="p-2 text-center">$680</td>
                    <td className="p-2 text-center bg-green-50">$680</td>
                    <td className="p-2 text-center">$680</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-semibold">MongoDB</td>
                    <td className="p-2 text-center text-green-600">$150 (EKS)</td>
                    <td className="p-2 text-center bg-green-50 text-green-600">$150 (EKS)</td>
                    <td className="p-2 text-center text-orange-600">$450 (Atlas)</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-2 font-semibold">Redis</td>
                    <td className="p-2 text-center text-green-600">$100 (EKS)</td>
                    <td className="p-2 text-center bg-green-50 text-green-600">$100 (EKS)</td>
                    <td className="p-2 text-center text-orange-600">$780 (ElastiCache)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-semibold">S3 + CloudFront</td>
                    <td className="p-2 text-center">$300</td>
                    <td className="p-2 text-center bg-green-50">$300</td>
                    <td className="p-2 text-center">$300</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-2 font-semibold">Others (NAT, ALB, etc)</td>
                    <td className="p-2 text-center">$530</td>
                    <td className="p-2 text-center bg-green-50">$530</td>
                    <td className="p-2 text-center">$820</td>
                  </tr>
                  <tr className="bg-gray-800 text-white font-bold">
                    <td className="p-2">TOTAL (1K Users)</td>
                    <td className="p-2 text-center">$4,500/mo</td>
                    <td className="p-2 text-center bg-green-600">$5,893/mo</td>
                    <td className="p-2 text-center">$7,163/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
              <div className="bg-orange-50 rounded p-2">
                <p className="font-bold text-orange-600">Full AWS</p>
                <p className="text-gray-600">Cheapest but 4-5 weeks setup, high risk</p>
              </div>
              <div className="bg-green-50 rounded p-2 border-2 border-green-400">
                <p className="font-bold text-green-600">Hybrid ⭐</p>
                <p className="text-gray-600">Best balance! 2 weeks setup, low risk</p>
              </div>
              <div className="bg-blue-50 rounded p-2">
                <p className="font-bold text-blue-600">All Managed</p>
                <p className="text-gray-600">Easiest but most expensive</p>
              </div>
            </div>
          </div>
        );

      case 'recommendation':
        return (
          <div className="h-full bg-gradient-to-br from-green-800 to-green-900 text-white p-6">
            <h2 className="text-2xl font-bold mb-4 border-b border-green-400 pb-2">
              🎯 Final Recommendation
            </h2>
            
            <div className="bg-white/10 rounded-lg p-4 mb-4">
              <h3 className="text-xl font-bold text-green-300 mb-3">Go with HYBRID Approach:</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-green-200 mb-2">✅ Use LiveKit Cloud</p>
                  <ul className="text-sm space-y-1 text-green-100">
                    <li>• Already integrated (wss://imeetpro-...)</li>
                    <li>• Video infra is complex - don't reinvent</li>
                    <li>• Global TURN servers included</li>
                    <li>• 99.99% uptime SLA</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-green-200 mb-2">✅ Self-host MongoDB + Redis on EKS</p>
                  <ul className="text-sm space-y-1 text-green-100">
                    <li>• Easy with Helm charts</li>
                    <li>• Save $980/month vs managed</li>
                    <li>• Same VPC = low latency</li>
                    <li>• Full control</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="bg-white/20 rounded-lg p-3 text-center">
                <p className="text-3xl font-bold">$5,893</p>
                <p className="text-sm text-green-200">/month @ 1K users</p>
              </div>
              <div className="bg-white/20 rounded-lg p-3 text-center">
                <p className="text-3xl font-bold">2 weeks</p>
                <p className="text-sm text-green-200">to production</p>
              </div>
              <div className="bg-white/20 rounded-lg p-3 text-center">
                <p className="text-3xl font-bold">18%</p>
                <p className="text-sm text-green-200">savings vs all-managed</p>
              </div>
            </div>
            
            <div className="bg-yellow-500/20 border border-yellow-400 rounded-lg p-3">
              <p className="font-semibold text-yellow-200 mb-1">💡 Future Optimization (After 6 months):</p>
              <p className="text-sm text-yellow-100">
                If traffic stable & team experienced → Consider self-hosting LiveKit → Save additional $1,200/month
              </p>
            </div>
          </div>
        );

      case 'implementation-steps':
        return (
          <div className="h-full bg-gray-50 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b-2 border-blue-500 pb-2">
              📋 Implementation Steps (2 Weeks)
            </h2>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-lg shadow p-3">
                <h3 className="font-bold text-blue-600 mb-2">Week 1: Infrastructure</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="bg-blue-100 text-blue-800 rounded px-2 py-0.5 text-xs">Day 1-2</span>
                    <div>
                      <p className="font-semibold">VPC + EKS Setup</p>
                      <p className="text-xs text-gray-500">VPC, subnets, EKS cluster, node groups</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="bg-blue-100 text-blue-800 rounded px-2 py-0.5 text-xs">Day 3</span>
                    <div>
                      <p className="font-semibold">RDS MySQL</p>
                      <p className="text-xs text-gray-500">Multi-AZ, security groups, backups</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="bg-blue-100 text-blue-800 rounded px-2 py-0.5 text-xs">Day 4</span>
                    <div>
                      <p className="font-semibold">MongoDB on EKS</p>
                      <p className="text-xs text-gray-500">Helm install, 3 replicas, PVC</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="bg-blue-100 text-blue-800 rounded px-2 py-0.5 text-xs">Day 5</span>
                    <div>
                      <p className="font-semibold">Redis on EKS</p>
                      <p className="text-xs text-gray-500">Helm install, cluster mode</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow p-3">
                <h3 className="font-bold text-green-600 mb-2">Week 2: Deploy & Test</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="bg-green-100 text-green-800 rounded px-2 py-0.5 text-xs">Day 6-7</span>
                    <div>
                      <p className="font-semibold">CI/CD Pipeline</p>
                      <p className="text-xs text-gray-500">Jenkins, ECR, Helm charts</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="bg-green-100 text-green-800 rounded px-2 py-0.5 text-xs">Day 8-9</span>
                    <div>
                      <p className="font-semibold">App Deployment</p>
                      <p className="text-xs text-gray-500">Frontend, Backend, Workers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="bg-green-100 text-green-800 rounded px-2 py-0.5 text-xs">Day 10</span>
                    <div>
                      <p className="font-semibold">ALB + SSL + DNS</p>
                      <p className="text-xs text-gray-500">ACM cert, Route 53, CloudFront</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="bg-green-100 text-green-800 rounded px-2 py-0.5 text-xs">Day 11-14</span>
                    <div>
                      <p className="font-semibold">Testing & Monitoring</p>
                      <p className="text-xs text-gray-500">Load test, Prometheus, alerts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-3 bg-blue-50 rounded-lg p-3">
              <h3 className="font-bold text-blue-700 mb-2">Quick Commands Preview:</h3>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono bg-gray-900 text-green-400 rounded p-2">
                <div>
                  <p className="text-gray-500"># MongoDB on EKS</p>
                  <p>helm install mongodb bitnami/mongodb \</p>
                  <p>  --set replicaCount=3</p>
                </div>
                <div>
                  <p className="text-gray-500"># Redis on EKS</p>
                  <p>helm install redis bitnami/redis \</p>
                  <p>  --set cluster.enabled=true</p>
                </div>
              </div>
            </div>
            
            <div className="mt-2 bg-green-100 border border-green-300 rounded p-2 text-center">
              <p className="text-green-800 font-semibold">
                🚀 Ready to Deploy! Start with Week 1 Day 1 - VPC Setup
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full h-screen bg-gray-900 flex flex-col">
      <div className="flex-1 overflow-hidden">
        {renderSlide()}
      </div>
      
      <div className="bg-gray-800 px-6 py-3 flex items-center justify-between">
        <button 
          onClick={prev}
          disabled={currentSlide === 0}
          className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600"
        >
          <ChevronLeft size={20}/>Previous
        </button>
        
        <div className="flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${
                idx === currentSlide ? 'bg-blue-500' : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
        
        <button 
          onClick={next}
          disabled={currentSlide === slides.length - 1}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-500"
        >
          Next<ChevronRight size={20}/>
        </button>
      </div>
      
      <div className="bg-gray-900 text-center py-1 text-xs text-gray-500">
        Slide {currentSlide + 1} of {slides.length} • iMeetPro Infrastructure Decision Guide
      </div>
    </div>
  );
}
