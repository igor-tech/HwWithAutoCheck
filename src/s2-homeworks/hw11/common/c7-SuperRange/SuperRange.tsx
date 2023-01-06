import React from 'react'
import {Slider, SliderProps, styled} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {


    return (<>
            <Slider
                sx={{ // стили для слайдера // пишет студент
                    width: '150px',
                    color: '#00CC22',
                    height: '4px',
                    '& .MuiSlider-thumb': {
                        height: 18,
                        width: 18,
                        border: ' 1px solid #00CC22',
                        backgroundColor: '#fff',
                        '&::after': {
                            position: 'absolute',
                            height: 6,
                            width: 6,
                            border: ' 1px solid #00CC22',
                            backgroundColor: '#00CC22',

                        },
                    },
                    '& .MuiSlider-rail': {
                        backgroundColor: '#8B8B8B',
                        borderRadius: '10px',
                    },
                }}
                {...props}
                // отдаём слайдеру пропсы если они есть (value например там внутри)
            />

        </>

    )
}

export default SuperRange
