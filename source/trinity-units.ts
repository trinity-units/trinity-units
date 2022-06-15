
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
** 
** Main application control.
** 
*/

//
// Control of measurement units.
//
enum TrinityUnitsBase {

    // -> Speed.
    MPH,                // Miles per hour.
    KMH,                // Kilometers per hour.
    FTS,                // Feet per second.
    MPS,                // Meters per second.
    KNOT,               // Knots, nautical mile per hour.

    // -> Length.
    KM,                 // Kilometers.
    M,                  // Meters.
    CM,                 // Centimeters.
    MM,                 // Millimeters.
    UM,                 // Micrometers.
    NM,                 // Nano meters.
    MILE,               // Miles.
    YARD,               // Yards.
    FT,                 // Feet, foot.
    INCH,               // Inches.
    NMILE,              // Nautical miles.
    LY,                 // Light years.

    // -> Energy.
    J,                  // Joules.
    KJ,                 // Kilojoules.
    MJ,                 // Megajoules.
    GC,                 // Gram calories.
    KC,                 // Kilogram calories.
    WH,                 // Watt hours.
    KWH,                // Kilowatt hours.
    EV,                 // Electron volts.
    BTU,                // British thermal units.
    UST,                // US thermal units.
    FP,                 // Foot pounds.
}

//
// Configure interface.
//

interface TrinityUnits 
extends 
    TrinityUnitsSpeed,
    TrinityUnitsLength,
    TrinityUnitsEnergy { }

//
// Prepare class.
//
var TrinityUnitsExtendsClasses = [];

class TrinityUnits {

    // General information.
    version = "1.0.0";
    projectPage = "https://github.com/trinity-units/trinity-units";
    author = "Jessé Silva aka Melchisedech333";
    
    // Controls.
    invalidValue = 0;

    // Initialize.
    constructor() {
        console.log("Trinity Units v" + this.version);
        console.log("Project page: "+ this.projectPage);
        console.log("Author: "+ this.author);

        // Prepare class.
        var extendsClasses = [];

        TrinityUnitsExtendsClasses.forEach(className => {
            extendsClasses.push(className);
        });

        this.applyMixins(TrinityUnits, extendsClasses);
    }

    // Mixins control.
    applyMixins(derivedConstructor: any, baseConstructors: any[]) {
        baseConstructors.forEach(baseConstructor => {
            Object.getOwnPropertyNames(baseConstructor.prototype)
                .forEach(name => {

                    // Ignore methods.
                    if (name != "constructor" && name != "invalid" && name != "processPrefix") {
                        Object.defineProperty(derivedConstructor.prototype, name, Object.getOwnPropertyDescriptor(
                            baseConstructor.prototype, name
                        ));
                    }

                });
            }
        );
    }

    // Return default invalid value.
    invalid() {
        return this.invalidValue;
    }

    // Process prefix.
    processPrefix(prefix: string, finalValue: number) {
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
    }
}


