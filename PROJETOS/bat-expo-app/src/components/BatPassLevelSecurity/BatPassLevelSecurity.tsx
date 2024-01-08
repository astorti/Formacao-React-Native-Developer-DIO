import React, { useState } from 'react';
import { View } from 'react-native';

import { styles } from '././BatPassLevelSecurityStyle';
import SelectDropdown from 'react-native-select-dropdown'
import { handleSelectLevelSecurity } from '../../services/passwordService';

export function BatPassLevelSecurity() {

    const passwordSecurity = ["weak", "normal", "strong"]

    return (
        <View>
            <SelectDropdown
                data={passwordSecurity}
                onSelect={(selectedItem) => {
                    handleSelectLevelSecurity(selectedItem)
                }}
                buttonStyle={styles.container}
                defaultButtonText={"Select a level security"}
            />
        </View>
    );
}