
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
** Control of energy related units.
** 
*/

class TrinityUnitsEnergy {
    
    // External attributes.
    unit: number;
    value: number;

    // External methods.
    invalid() { return 0; }
    processPrefix(prefix: string, value: number) {}

    /*
    * -> Setters.
    */

    // Set joules.
    j(value) {
        this.value = value;
        this.unit = TrinityUnitsBase.J;

        return this;
    }

    /*
    * -> Process data.
    */

    // Convert to kilojoules.
    toKj(prefix = '') {
        var value = this.invalid();

        switch (this.unit) {
            case TrinityUnitsBase.J:
                value = this.value / 1000; break;
        }

        return this.processPrefix(prefix, value);
    }

    // Convert to megajoules.
    toMj(prefix = '') {
        var value = this.invalid();

        switch (this.unit) {
            case TrinityUnitsBase.J:
                value = this.value / 1e+6; break;
        }

        return this.processPrefix(prefix, value);
    }

    // Convert to gram calories.
    toGc(prefix = '') {
        var value = this.invalid();

        switch (this.unit) {
            case TrinityUnitsBase.J:
                value = this.value / 4.184; break;
        }

        return this.processPrefix(prefix, value);
    }
    
    // Convert to kilocalories.
    toKc(prefix = '') {
        var value = this.invalid();

        switch (this.unit) {
            case TrinityUnitsBase.J:
                value = this.value / 4184; break;
        }

        return this.processPrefix(prefix, value);
    }
}

// Add class to mixins control.
TrinityUnitsExtendsClasses.push(TrinityUnitsEnergy);


