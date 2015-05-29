function Neuron (){
    this.threshold = 0.5;
    this.inputNeurons = [] ;
    //How do we get inputs and send outputs?
    
}

// Assume all input neurons' outputs are known and calculate this one's output
Neuron.prototype.calculateOutput = function(){
    total = 0;
    for (n of this.inputNeurons){
        total = n.source.output * n.weight;
    }
    if (total < this.threshold){
        this.output = 0;
    }else{
        this.output = 1;
    }
};

//something happened that should trigger firing neuronal pathways to be reinforced
Neuron.prototype.reinforceInputs = function(){
    //How should we determine how much to increment weights?
    for (n of this.inputNeurons){
        if(n.source.output){
            n.weight += 0.1;    //probably too large, but we'll start with fast-learning neurons
        }else{
            n.weight -= 0.02;   //neural atrophy should probably be notably slower than learning to promote multi-purpose learning
        }
    }
};

Neuron.prototype.pushNeuron = function(newNeuron){
    this.inputNeurons.push({source: newNeuron, weight: 0.5});   // Should randomize the weight within a certain range
};
