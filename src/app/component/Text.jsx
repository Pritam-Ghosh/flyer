import Image from 'next/image'
import React from 'react'

function Text() {
    const [alignment, setAlignment] = useState('left');
    return (
        <>
            <div className="d-flex justify-content-between w-100">
                <button
                    className="text-alignment"
                    onClick={() => setAlignment('left')}
                >
                    <Image
                        src="/left.webp"
                        width={40}
                        height={40}
                        alt="left align"
                    />
                </button>
                <button
                    className="text-alignment"
                    onClick={() => setAlignment('center')}
                >
                    <Image
                        src="/center.webp"
                        width={40}
                        height={40}
                        alt="center align"
                    />
                </button>
                <button
                    className="text-alignment"
                    onClick={() => setAlignment('right')}
                >
                    <Image
                        src="/right.webp"
                        width={40}
                        height={40}
                        alt="right align"
                    />
                </button>
            </div>

        </>
    )
}

export default Text