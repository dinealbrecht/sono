'use strict';

var Sono = require('../src/sono.js');
var BufferSource = require('../src/lib/source/buffer-source.js');
var MediaSource = require('../src/lib/source/media-source.js');
var MicrophoneSource = require('../src/lib/source/microphone-source.js');
var OscillatorSource = require('../src/lib/source/oscillator-source.js');
var ScriptSource = require('../src/lib/source/script-source.js');

describe('Source', function() {

    describe('Buffer', function() {
        var buffer = Sono.context.createBuffer(1, 1, 22050);
        var source = new BufferSource(buffer, Sono.context);

        it('should have controls', function() {
            expect(source.play).to.be.a('function');
            expect(source.pause).to.be.a('function');
            expect(source.stop).to.be.a('function');
        });

        it('should have destroy', function() {
            expect(source.destroy).to.be.a('function');
        });

        it('should have state', function() {
            expect(source.loop).to.be.a('boolean');
            expect(source.duration).to.be.a('number');
            expect(source.currentTime).to.be.a('number');
            expect(source.progress).to.be.a('number');
            expect(source.playing).to.be.a('boolean');
            expect(source.paused).to.be.a('boolean');
        });

        it('should have sourceNode', function() {
            var desc = Object.getOwnPropertyDescriptor(source, 'sourceNode');
            expect(desc.get).to.be.a('function');
            expect(desc.set).to.not.exist;
        });

        it('should be able to destroy', function() {
            expect(source.sourceNode).to.exist;
            source.destroy();
            expect(source.sourceNode).to.not.exist;
        });
    });

    describe('Media', function() {
        var el = document.createElement('audio');
        var source = new MediaSource(el, Sono.context);

        it('should have controls', function() {
            expect(source.play).to.be.a('function');
            expect(source.pause).to.be.a('function');
            expect(source.stop).to.be.a('function');
        });

        it('should have destroy', function() {
            expect(source.destroy).to.be.a('function');
        });

        it('should have state', function() {
            expect(source.loop).to.be.a('boolean');
            expect(source.duration).to.be.a('number');
            expect(source.currentTime).to.be.a('number');
            expect(source.progress).to.be.a('number');
            expect(source.playing).to.be.a('boolean');
            expect(source.paused).to.be.a('boolean');
        });

        it('should have sourceNode', function() {
            var desc = Object.getOwnPropertyDescriptor(source, 'sourceNode');
            expect(desc.get).to.be.a('function');
            expect(desc.set).to.not.exist;
            expect(source.sourceNode instanceof window.MediaElementAudioSourceNode).to.be.true;
        });

        it('should be able to destroy', function() {
            expect(source.sourceNode).to.exist;
            source.destroy();
            expect(source.sourceNode).to.not.exist;
        });
    });

    describe('Microphone', function() {
        var source = new MicrophoneSource(null, Sono.context);

        it('should have controls', function() {
            expect(source.play).to.be.a('function');
            expect(source.pause).to.be.a('function');
            expect(source.stop).to.be.a('function');
        });

        it('should have destroy', function() {
            expect(source.destroy).to.be.a('function');
        });

        it('should have state', function() {
            //expect(source.loop).to.be.a('boolean');
            expect(source.duration).to.be.a('number');
            expect(source.currentTime).to.be.a('number');
            expect(source.progress).to.be.a('number');
            expect(source.playing).to.be.a('boolean');
            expect(source.paused).to.be.a('boolean');
        });

        it('should have sourceNode', function() {
            var desc = Object.getOwnPropertyDescriptor(source, 'sourceNode');
            expect(desc.get).to.be.a('function');
            expect(desc.set).to.not.exist;
        });

        it('should be able to destroy', function() {
            expect(source.destroy).to.be.a('function');
        });
    });

    describe('Oscillator', function() {
        var source = new OscillatorSource('sine', Sono.context);

        it('should have controls', function() {
            expect(source.play).to.be.a('function');
            expect(source.pause).to.be.a('function');
            expect(source.stop).to.be.a('function');
        });

        it('should have destroy', function() {
            expect(source.destroy).to.be.a('function');
        });

        it('should have state', function() {
            //expect(source.loop).to.be.a('boolean');
            expect(source.duration).to.be.a('number');
            expect(source.currentTime).to.be.a('number');
            expect(source.progress).to.be.a('number');
            expect(source.playing).to.be.a('boolean');
            expect(source.paused).to.be.a('boolean');
        });

        it('should have sourceNode', function() {
            var desc = Object.getOwnPropertyDescriptor(source, 'sourceNode');
            expect(desc.get).to.be.a('function');
            expect(desc.set).to.not.exist;
            expect(source.sourceNode instanceof window.AudioNode).to.be.true;
        });

        it('should be able to destroy', function() {
            expect(source.sourceNode).to.exist;
            source.destroy();
            expect(source.sourceNode).to.not.exist;
        });

    });

    describe('Script Source', function() {
        var source = new ScriptSource({
            callback: function() {}
        }, Sono.context);

        it('should have controls', function() {
            expect(source.play).to.be.a('function');
            expect(source.pause).to.be.a('function');
            expect(source.stop).to.be.a('function');
        });

        it('should have destroy', function() {
            expect(source.destroy).to.be.a('function');
        });

        it('should have state', function() {
            //expect(source.loop).to.be.a('boolean');
            expect(source.duration).to.be.a('number');
            expect(source.currentTime).to.be.a('number');
            expect(source.progress).to.be.a('number');
            expect(source.playing).to.be.a('boolean');
            expect(source.paused).to.be.a('boolean');
        });

        it('should have sourceNode', function() {
            var desc = Object.getOwnPropertyDescriptor(source, 'sourceNode');
            expect(desc.get).to.be.a('function');
            expect(desc.set).to.not.exist;
            expect(source.sourceNode instanceof window.AudioNode).to.be.true;
        });

        it('should be able to destroy', function() {
            expect(source.sourceNode).to.exist;
            source.destroy();
            expect(source.sourceNode).to.not.exist;
        });
    });

});
