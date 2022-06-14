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
// import { TrinityUnitsSpeed } = from "./speed";
//
// Control of measurement units.
//
var TrinityUnitsBase;
(function (TrinityUnitsBase) {
    // -> Speed.
    TrinityUnitsBase[TrinityUnitsBase["MPH"] = 0] = "MPH";
    TrinityUnitsBase[TrinityUnitsBase["KMH"] = 1] = "KMH";
    TrinityUnitsBase[TrinityUnitsBase["FTS"] = 2] = "FTS";
    TrinityUnitsBase[TrinityUnitsBase["MPS"] = 3] = "MPS";
    TrinityUnitsBase[TrinityUnitsBase["KNOT"] = 4] = "KNOT";
    // -> Length.
    TrinityUnitsBase[TrinityUnitsBase["KM"] = 5] = "KM";
    TrinityUnitsBase[TrinityUnitsBase["M"] = 6] = "M";
    TrinityUnitsBase[TrinityUnitsBase["CM"] = 7] = "CM";
    TrinityUnitsBase[TrinityUnitsBase["MM"] = 8] = "MM";
    TrinityUnitsBase[TrinityUnitsBase["UM"] = 9] = "UM";
    TrinityUnitsBase[TrinityUnitsBase["NM"] = 10] = "NM";
    TrinityUnitsBase[TrinityUnitsBase["MILE"] = 11] = "MILE";
    TrinityUnitsBase[TrinityUnitsBase["YARD"] = 12] = "YARD";
    TrinityUnitsBase[TrinityUnitsBase["FT"] = 13] = "FT";
    TrinityUnitsBase[TrinityUnitsBase["INCH"] = 14] = "INCH";
    TrinityUnitsBase[TrinityUnitsBase["NMILE"] = 15] = "NMILE";
    TrinityUnitsBase[TrinityUnitsBase["LY"] = 16] = "LY";
    // -> Energy.
    TrinityUnitsBase[TrinityUnitsBase["J"] = 17] = "J";
    TrinityUnitsBase[TrinityUnitsBase["MJ"] = 18] = "MJ";
    TrinityUnitsBase[TrinityUnitsBase["KJ"] = 19] = "KJ";
    TrinityUnitsBase[TrinityUnitsBase["GC"] = 20] = "GC";
    TrinityUnitsBase[TrinityUnitsBase["KC"] = 21] = "KC";
    TrinityUnitsBase[TrinityUnitsBase["WH"] = 22] = "WH";
    TrinityUnitsBase[TrinityUnitsBase["KWH"] = 23] = "KWH";
    TrinityUnitsBase[TrinityUnitsBase["EV"] = 24] = "EV";
    TrinityUnitsBase[TrinityUnitsBase["BTU"] = 25] = "BTU";
    TrinityUnitsBase[TrinityUnitsBase["UST"] = 26] = "UST";
    TrinityUnitsBase[TrinityUnitsBase["FP"] = 27] = "FP";
})(TrinityUnitsBase || (TrinityUnitsBase = {}));
//
// Prepare class.
//
var TrinityUnitsExtendsClasses = [];
var TrinityUnits = /** @class */ (function () {
    // Initialize.
    function TrinityUnits() {
        // General information.
        this.version = "1.0.0";
        this.projectPage = "https://github.com/trinity-units/trinity-units";
        // Controls.
        this.invalidValue = 0;
        console.log("Trinity Units v" + this.version);
        console.log("Project page: " + this.projectPage);
        // Prepare class.
        var extendsClasses = [];
        TrinityUnitsExtendsClasses.forEach(function (className) {
            extendsClasses.push(className);
        });
        this.applyMixins(TrinityUnits, extendsClasses);
    }
    // Mixins control.
    TrinityUnits.prototype.applyMixins = function (derivedConstructor, baseConstructors) {
        baseConstructors.forEach(function (baseConstructor) {
            Object.getOwnPropertyNames(baseConstructor.prototype)
                .forEach(function (name) {
                // Ignore methods.
                if (name != "constructor" && name != "invalid" && name != "processPrefix") {
                    Object.defineProperty(derivedConstructor.prototype, name, Object.getOwnPropertyDescriptor(baseConstructor.prototype, name));
                }
            });
        });
    };
    // Return default invalid value.
    TrinityUnits.prototype.invalid = function () {
        return this.invalidValue;
    };
    // Process prefix.
    TrinityUnits.prototype.processPrefix = function (prefix, finalValue) {
        switch (prefix) {
            case "round":
            case "r":
                return Math.round(finalValue);
            case "floor":
            case "f":
                return Math.floor(finalValue);
            case "ceil":
            case "c":
                return Math.ceil(finalValue);
            default:
                return finalValue;
        }
    };
    return TrinityUnits;
}());
