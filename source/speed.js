/*
** Trinity Units created by Jessé Silva aka Melchisedech333.
**
** Melchisedech333: https://github.com/melchisedech333
** Project: https://github.com/trinity-units/trinity-units
**
** LICENSE:
**
** Copyright (c) 2022, Melchisedech333.
**
** Redistribution and use in source and binary forms, with or without
** modification, are permitted provided that the following conditions are met:
**
** 1. Redistributions of source code must retain the above copyright notice, this
**    list of conditions and the following disclaimer.
**
** 2. Redistributions in binary form must reproduce the above copyright notice,
**    this list of conditions and the following disclaimer in the documentation
**    and/or other materials provided with the distribution.
**
** 3. Neither the name of the copyright holder nor the names of its
**    contributors may be used to endorse or promote products derived from
**    this software without specific prior written permission.
**
** THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
** AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
** IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
** DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
** FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
** DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
** SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
** CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
** OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
** OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
**
*/
var TrinityUnitsSpeed = /** @class */ (function () {
    function TrinityUnitsSpeed() {
    }
    // External methods.
    TrinityUnitsSpeed.prototype.invalid = function () { return 0; };
    TrinityUnitsSpeed.prototype.processPrefix = function (prefix, value) { };
    /*
    * -> Setters.
    */
    // Set miles per hour.
    TrinityUnitsSpeed.prototype.mph = function (value) {
        this.unit = TrinityUnitsBase.MPH;
        this.value = value;
        return this;
    };
    // Set kilometers per hour.
    TrinityUnitsSpeed.prototype.kmh = function (value) {
        this.kmhInternal(value);
        return this;
    };
    TrinityUnitsSpeed.prototype.kph = function (value) {
        this.kmhInternal(value);
        return this;
    };
    TrinityUnitsSpeed.prototype.kmhInternal = function (value) {
        this.unit = TrinityUnitsBase.KMH;
        this.value = value;
        return this;
    };
    // Set feet per second.
    TrinityUnitsSpeed.prototype.fts = function (value) {
        this.ftsInternal(value);
        return this;
    };
    TrinityUnitsSpeed.prototype.fps = function (value) {
        this.ftsInternal(value);
        return this;
    };
    TrinityUnitsSpeed.prototype.ftsInternal = function (value) {
        this.unit = TrinityUnitsBase.FTS;
        this.value = value;
        return this;
    };
    // Set meters per second.
    TrinityUnitsSpeed.prototype.mps = function (value) {
        this.unit = TrinityUnitsBase.MPS;
        this.value = value;
        return this;
    };
    // Set knot.
    TrinityUnitsSpeed.prototype.knot = function (value) {
        this.unit = TrinityUnitsBase.KNOT;
        this.value = value;
        return this;
    };
    /*
    * -> Process data.
    */
    // Convert to miles per hour.
    TrinityUnitsSpeed.prototype.toMph = function (prefix) {
        if (prefix === void 0) { prefix = ''; }
        var value = this.invalid();
        switch (this.unit) {
            case TrinityUnitsBase.MPH:
                value = this.value;
                break;
            case TrinityUnitsBase.KMH:
                value = this.value * 0.621371;
                break;
            case TrinityUnitsBase.FTS:
                value = this.value * 0.681818;
                break;
            case TrinityUnitsBase.MPS:
                value = this.value * 2.23694;
                break;
            case TrinityUnitsBase.KNOT:
                value = this.value * 1.15078;
        }
        return this.processPrefix(prefix, value);
    };
    // Convert to quilometers per hour.
    TrinityUnitsSpeed.prototype.toKmh = function (prefix) {
        if (prefix === void 0) { prefix = ''; }
        return this.toKmhInternal(prefix);
    };
    TrinityUnitsSpeed.prototype.toKph = function (prefix) {
        if (prefix === void 0) { prefix = ''; }
        return this.toKmhInternal(prefix);
    };
    TrinityUnitsSpeed.prototype.toKmhInternal = function (prefix) {
        var value = this.invalid();
        switch (this.unit) {
            case TrinityUnitsBase.MPH:
                value = this.value * 1.60934;
                break;
            case TrinityUnitsBase.KMH:
                value = this.value;
                break;
            case TrinityUnitsBase.FTS:
                value = this.value * 1.09728;
                break;
            case TrinityUnitsBase.MPS:
                value = this.value * 3.6;
                break;
            case TrinityUnitsBase.KNOT:
                value = this.value * 1.852;
        }
        return this.processPrefix(prefix, value);
    };
    // Convert to foot per second.
    TrinityUnitsSpeed.prototype.toFps = function (prefix) {
        if (prefix === void 0) { prefix = ''; }
        return this.toFtsInterval(prefix);
    };
    TrinityUnitsSpeed.prototype.toFts = function (prefix) {
        if (prefix === void 0) { prefix = ''; }
        return this.toFtsInterval(prefix);
    };
    TrinityUnitsSpeed.prototype.toFtsInterval = function (prefix) {
        var value = this.invalid();
        switch (this.unit) {
            case TrinityUnitsBase.MPH:
                value = this.value * 1.46667;
                break;
            case TrinityUnitsBase.KMH:
                value = this.value * 0.911344;
                break;
            case TrinityUnitsBase.FTS:
                value = this.value;
                break;
            case TrinityUnitsBase.MPS:
                value = this.value * 3.28084;
                break;
            case TrinityUnitsBase.KNOT:
                value = this.value * 1.68781;
        }
        return this.processPrefix(prefix, value);
    };
    // Convert to meter per second.
    TrinityUnitsSpeed.prototype.toMps = function (prefix) {
        if (prefix === void 0) { prefix = ''; }
        var value = this.invalid();
        switch (this.unit) {
            case TrinityUnitsBase.MPH:
                value = this.value * 0.44704;
                break;
            case TrinityUnitsBase.KMH:
                value = this.value * 0.277778;
                break;
            case TrinityUnitsBase.FTS:
                value = this.value * 0.3048;
                break;
            case TrinityUnitsBase.MPS:
                value = this.value;
                break;
            case TrinityUnitsBase.KNOT:
                value = this.value * 0.51444;
        }
        return this.processPrefix(prefix, value);
    };
    // Convert to Knots.
    TrinityUnitsSpeed.prototype.toKnot = function (prefix) {
        if (prefix === void 0) { prefix = ''; }
        var value = this.invalid();
        switch (this.unit) {
            case TrinityUnitsBase.MPH:
                value = this.value * 0.868976;
                break;
            case TrinityUnitsBase.KMH:
                value = this.value * 0.539957;
                break;
            case TrinityUnitsBase.FTS:
                value = this.value * 0.592484;
                break;
            case TrinityUnitsBase.MPS:
                value = this.value * 1.94384;
                break;
            case TrinityUnitsBase.KNOT:
                value = this.value;
        }
        return this.processPrefix(prefix, value);
    };
    return TrinityUnitsSpeed;
}());
// Add class to mixins control.
TrinityUnitsExtendsClasses.push(TrinityUnitsSpeed);
