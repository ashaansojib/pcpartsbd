import { DataLoader } from '@/components/shared/Loader';
import React from 'react';

const loading = () => {
    return (
        <div>
            <p>default loading</p>
            <DataLoader />
        </div>
    );
};

export default loading;