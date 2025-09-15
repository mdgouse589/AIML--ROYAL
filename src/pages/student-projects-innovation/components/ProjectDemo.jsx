import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectDemo = ({ project, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('demo');
  const [demoInput, setDemoInput] = useState('');
  const [demoResult, setDemoResult] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen || !project) return null;

  const handleDemoRun = async () => {
    setIsProcessing(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // Mock demo results based on project type
      const mockResults = {
        'COVID-19 Detection using Chest X-rays': {
          prediction: 'Normal',
          confidence: '94.2%',
          processingTime: '0.8s',
          details: 'No signs of COVID-19 pneumonia detected. Chest X-ray appears normal with clear lung fields.'
        },
        'Smart Traffic Management System': {
          prediction: 'Optimal Route Found',
          confidence: '98.7%',
          processingTime: '1.2s',
          details: 'Recommended route reduces travel time by 23% and avoids 2 congested intersections.'
        },
        'Sentiment Analysis for Social Media': {
          prediction: 'Positive Sentiment',
          confidence: '87.3%',
          processingTime: '0.3s',
          details: 'Text analysis indicates positive emotional tone with high confidence score.'
        }
      };

      setDemoResult(mockResults?.[project?.title] || {
        prediction: 'Analysis Complete',
        confidence: '92.5%',
        processingTime: '0.5s',
        details: 'AI model has successfully processed the input data.'
      });
      setIsProcessing(false);
    }, 2000);
  };

  const tabs = [
    { id: 'demo', label: 'Live Demo', icon: 'Play' },
    { id: 'architecture', label: 'Architecture', icon: 'Network' },
    { id: 'performance', label: 'Performance', icon: 'BarChart3' },
    { id: 'code', label: 'Code Samples', icon: 'Code2' }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{project?.title}</h2>
                <p className="text-white/80">{project?.category} • Interactive Demo</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              iconName="X"
              onClick={onClose}
              className="text-white hover:bg-white/20"
            />
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200">
          <div className="flex space-x-8 px-6">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center space-x-2 py-4 border-b-2 transition-colors duration-200 ${
                  activeTab === tab?.id
                    ? 'border-primary text-primary' :'border-transparent text-gray-600 hover:text-primary'
                }`}
              >
                <Icon name={tab?.icon} size={16} />
                <span className="font-medium">{tab?.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {activeTab === 'demo' && (
            <div className="space-y-6">
              {/* Demo Interface */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Input Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Input Data</h3>
                  
                  {project?.title?.includes('X-ray') ? (
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <Icon name="Upload" size={48} className="text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-4">Upload chest X-ray image for analysis</p>
                      <Button variant="outline" iconName="Upload" iconPosition="left">
                        Choose Image
                      </Button>
                    </div>
                  ) : project?.title?.includes('Traffic') ? (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Starting Location
                        </label>
                        <input
                          type="text"
                          placeholder="Enter starting point"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                          value={demoInput}
                          onChange={(e) => setDemoInput(e?.target?.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Destination
                        </label>
                        <input
                          type="text"
                          placeholder="Enter destination"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Input Text
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Enter text for analysis..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                        value={demoInput}
                        onChange={(e) => setDemoInput(e?.target?.value)}
                      />
                    </div>
                  )}

                  <Button
                    variant="default"
                    fullWidth
                    loading={isProcessing}
                    iconName="Play"
                    iconPosition="left"
                    onClick={handleDemoRun}
                    className="bg-primary hover:bg-primary/90"
                  >
                    {isProcessing ? 'Processing...' : 'Run Analysis'}
                  </Button>
                </div>

                {/* Results Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Results</h3>
                  
                  {demoResult ? (
                    <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-600">Prediction</span>
                        <span className="text-lg font-bold text-primary">{demoResult?.prediction}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-600">Confidence</span>
                        <span className="text-lg font-bold text-secondary">{demoResult?.confidence}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-600">Processing Time</span>
                        <span className="text-sm text-gray-700">{demoResult?.processingTime}</span>
                      </div>
                      
                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-sm text-gray-700">{demoResult?.details}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gray-50 rounded-lg p-8 text-center">
                      <Icon name="Brain" size={48} className="text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">Run the analysis to see results</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">System Architecture</h3>
              <div className="bg-gray-50 rounded-lg p-8">
                <Image
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop"
                  alt="System Architecture Diagram"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <Icon name="Database" size={32} className="text-primary mx-auto mb-2" />
                    <h4 className="font-semibold">Data Layer</h4>
                    <p className="text-sm text-gray-600">MongoDB, Redis Cache</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <Icon name="Brain" size={32} className="text-secondary mx-auto mb-2" />
                    <h4 className="font-semibold">AI Engine</h4>
                    <p className="text-sm text-gray-600">TensorFlow, PyTorch</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <Icon name="Globe" size={32} className="text-accent mx-auto mb-2" />
                    <h4 className="font-semibold">API Layer</h4>
                    <p className="text-sm text-gray-600">Flask, REST APIs</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'performance' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Performance Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold mb-4">Model Performance</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Accuracy</span>
                      <span className="font-bold text-primary">94.2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Precision</span>
                      <span className="font-bold text-secondary">92.8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Recall</span>
                      <span className="font-bold text-accent">91.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>F1-Score</span>
                      <span className="font-bold text-primary">92.1%</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold mb-4">System Performance</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Response Time</span>
                      <span className="font-bold text-primary">0.8s</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Throughput</span>
                      <span className="font-bold text-secondary">150 req/s</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Memory Usage</span>
                      <span className="font-bold text-accent">2.1 GB</span>
                    </div>
                    <div className="flex justify-between">
                      <span>CPU Usage</span>
                      <span className="font-bold text-primary">45%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'code' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Code Samples</h3>
              <div className="bg-gray-900 rounded-lg p-6 text-white overflow-x-auto">
                <pre className="text-sm">
                  <code>{`# AI Model Implementation
import tensorflow as tf
from tensorflow.keras import layers, models

class COVIDDetectionModel:
    def __init__(self):
        self.model = self.build_model()
    
    def build_model(self):
        model = models.Sequential([
            layers.Conv2D(32, (3, 3), activation='relu', 
                         input_shape=(224, 224, 3)),
            layers.MaxPooling2D((2, 2)),
            layers.Conv2D(64, (3, 3), activation='relu'),
            layers.MaxPooling2D((2, 2)),
            layers.Conv2D(64, (3, 3), activation='relu'),
            layers.Flatten(),
            layers.Dense(64, activation='relu'),
            layers.Dense(2, activation='softmax')
        ])
        
        model.compile(optimizer='adam',
                     loss='categorical_crossentropy',
                     metrics=['accuracy'])
        return model
    
    def predict(self, image):
        prediction = self.model.predict(image)
        return prediction`}</code>
                </pre>
              </div>
              
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  iconName="Github"
                  iconPosition="left"
                  onClick={() => window.open(project?.github?.url, '_blank')}
                >
                  View Full Code
                </Button>
                <Button
                  variant="ghost"
                  iconName="Download"
                  iconPosition="left"
                >
                  Download Dataset
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDemo;