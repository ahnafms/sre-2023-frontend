import { BsArrowRightShort, BsHeartFill, BsPlusLg } from 'react-icons/bs';

import Button from '@/components/Button';
import IconButton from '@/components/IconButton';
// NOTE : ada beberapa hal kedepannya yang akan disesuaikan, seperti contoh
// - h1 akan disesuaikan dengan typography nantinya serta menyesuaikan warna palette
// - kebutuhan gsm yang disesuaikan dengan uix & penyesuaian lainnya

export default function ButtonPage() {
    return (
        <div className='flex flex-col px-2'>
            <h1>
                Primary
            </h1>
            <div className='flex flex-row gap-2 mt-4'>
                {/* Primary w/o icon */}
                <div className='flex flex-col gap-2'>
                    <div>
                        <Button variant='primary' size='lg'>
                            <h1>
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button variant='primary' size='base'>
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button variant='primary' size='sm'>
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                </div>
                {/* Primary w/o icon End*/}

                {/* Primary w/ icon */}
                <div className='flex flex-col gap-2'>
                    <div>
                        <Button
                            variant='primary'
                            size='lg'
                            leftIcon={BsHeartFill}
                            rightIcon={BsHeartFill}
                            leftIconClassName='w-3.5'
                            rightIconClassName='w-3.5'
                        >
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button
                            variant='primary'
                            size='base'
                            leftIcon={BsHeartFill}
                            rightIcon={BsHeartFill}
                            leftIconClassName='w-3'
                            rightIconClassName='w-3'
                        >
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button
                            variant='primary'
                            size='sm'
                            leftIcon={BsHeartFill}
                            rightIcon={BsHeartFill}
                            leftIconClassName='w-2.5'
                            rightIconClassName='w-2.5'
                        >
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                </div>
                {/* Primary w/ icon End*/}

                {/* Primary Icon */}
                <div className='flex flex-col gap-2 items-center'>
                    <div>
                        <IconButton
                            variant='primary'
                            size='lg'
                            icon={BsHeartFill}
                            iconClassName='w-3.5'
                        ></IconButton>
                    </div>
                    <div>
                        <IconButton
                            variant='primary'
                            size='base'
                            icon={BsHeartFill}
                            iconClassName='w-3'
                        ></IconButton>
                    </div>
                    <div>
                        <IconButton
                            variant='primary'
                            size='sm'
                            icon={BsHeartFill}
                            iconClassName='w-2.5'
                        ></IconButton>
                    </div>
                </div>
                {/* Primary Icon End*/}

                {/* Success w/o icon */}
                <div className='flex flex-col gap-2'>
                    <div>
                        <Button variant='success' size='lg'>
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button variant='success' size='base'>
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button variant='success' size='sm'>
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                </div>
                {/* Success w/o icon End*/}

                {/* Success w/ icon */}
                <div className='flex flex-col gap-2'>
                    <div>
                        <Button
                            variant='success'
                            size='lg'
                            leftIcon={BsHeartFill}
                            rightIcon={BsHeartFill}
                            leftIconClassName='w-3.5'
                            rightIconClassName='w-3.5'
                        >
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button
                            variant='success'
                            size='base'
                            leftIcon={BsHeartFill}
                            rightIcon={BsHeartFill}
                            leftIconClassName='w-3'
                            rightIconClassName='w-3'
                        >
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button
                            variant='success'
                            size='sm'
                            leftIcon={BsHeartFill}
                            rightIcon={BsHeartFill}
                            leftIconClassName='w-2.5'
                            rightIconClassName='w-2.5'
                        >
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                </div>
                {/* Success w/ icon End*/}

                {/* Success Icon */}
                <div className='flex flex-col gap-2 items-center'>
                    <div>
                        <IconButton
                            variant='success'
                            size='lg'
                            icon={BsHeartFill}
                            iconClassName='w-3.5'
                        ></IconButton>
                    </div>
                    <div>
                        <IconButton
                            variant='success'
                            size='base'
                            icon={BsHeartFill}
                            iconClassName='w-3'
                        ></IconButton>
                    </div>
                    <div>
                        <IconButton
                            variant='success'
                            size='sm'
                            icon={BsHeartFill}
                            iconClassName='w-2.5'
                        ></IconButton>
                    </div>
                </div>
                {/* Success Icon End*/}

                {/* Danger w/o icon */}
                <div className='flex flex-col gap-2'>
                    <div>
                        <Button variant='danger' size='lg'>
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button variant='danger' size='base'>
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button variant='danger' size='sm'>
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                </div>
                {/* Danger w/o icon End*/}

                {/* Danger w/ icon */}
                <div className='flex flex-col gap-2'>
                    <div>
                        <Button
                            variant='danger'
                            size='lg'
                            leftIcon={BsHeartFill}
                            rightIcon={BsHeartFill}
                            leftIconClassName='w-3.5'
                            rightIconClassName='w-3.5'
                        >
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button
                            variant='danger'
                            size='base'
                            leftIcon={BsHeartFill}
                            rightIcon={BsHeartFill}
                            leftIconClassName='w-3'
                            rightIconClassName='w-3'
                        >
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button
                            variant='danger'
                            size='sm'
                            leftIcon={BsHeartFill}
                            rightIcon={BsHeartFill}
                            leftIconClassName='w-2.5'
                            rightIconClassName='w-2.5'
                        >
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                </div>
                {/* Danger w/ icon End*/}

                {/* Danger Icon */}
                <div className='flex flex-col gap-2 items-center'>
                    <div>
                        <IconButton
                            variant='danger'
                            size='lg'
                            icon={BsHeartFill}
                            iconClassName='w-3.5'
                        ></IconButton>
                    </div>
                    <div>
                        <IconButton
                            variant='danger'
                            size='base'
                            icon={BsHeartFill}
                            iconClassName='w-3'
                        ></IconButton>
                    </div>
                    <div>
                        <IconButton
                            variant='danger'
                            size='sm'
                            icon={BsHeartFill}
                            iconClassName='w-2.5'
                        ></IconButton>
                    </div>
                </div>
                {/* Danger Icon End*/}

                {/* Warning w/o icon */}
                <div className='flex flex-col gap-2'>
                    <div>
                        <Button variant='warning' size='lg'>
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button variant='warning' size='base'>
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button variant='warning' size='sm'>
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                </div>
                {/* Warning w/o icon End*/}

                {/* Warning w/ icon */}
                <div className='flex flex-col gap-2'>
                    <div>
                        <Button
                            variant='warning'
                            size='lg'
                            leftIcon={BsHeartFill}
                            rightIcon={BsHeartFill}
                            leftIconClassName='w-3.5'
                            rightIconClassName='w-3.5'
                        >
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button
                            variant='warning'
                            size='base'
                            leftIcon={BsHeartFill}
                            rightIcon={BsHeartFill}
                            leftIconClassName='w-3'
                            rightIconClassName='w-3'
                        >
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button
                            variant='warning'
                            size='sm'
                            leftIcon={BsHeartFill}
                            rightIcon={BsHeartFill}
                            leftIconClassName='w-2.5'
                            rightIconClassName='w-2.5'
                        >
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                </div>
                {/* Warning w/ icon End*/}

                {/* Warning Icon */}
                <div className='flex flex-col gap-2 items-center'>
                    <div>
                        <IconButton
                            variant='warning'
                            size='lg'
                            icon={BsHeartFill}
                            iconClassName='w-3.5'
                        ></IconButton>
                    </div>
                    <div>
                        <IconButton
                            variant='warning'
                            size='base'
                            icon={BsHeartFill}
                            iconClassName='w-3'
                        ></IconButton>
                    </div>
                    <div>
                        <IconButton
                            variant='warning'
                            size='sm'
                            icon={BsHeartFill}
                            iconClassName='w-2.5'
                        ></IconButton>
                    </div>
                </div>
                {/* Warning Icon End*/}
            </div>

            <div className='flex flex-row gap-2 mt-4'>
                {/* Primary w/o icon */}
                <div className='flex flex-col gap-2'>
                    <div>
                        <Button variant='primary' size='lg'>
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button variant='primary' size='base'>
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button variant='primary' size='sm'>
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                </div>
                {/* Primary w/o icon End*/}

                {/* Primary w/ icon */}
                <div className='flex flex-col gap-2'>
                    <div>
                        <Button
                            variant='primary'
                            size='lg'
                            leftIcon={BsHeartFill}
                            rightIcon={BsHeartFill}
                            leftIconClassName='w-3.5'
                            rightIconClassName='w-3.5'
                        >
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button
                            variant='primary'
                            size='base'
                            leftIcon={BsHeartFill}
                            rightIcon={BsHeartFill}
                            leftIconClassName='w-3'
                            rightIconClassName='w-3'
                        >
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button
                            variant='primary'
                            size='sm'
                            leftIcon={BsHeartFill}
                            rightIcon={BsHeartFill}
                            leftIconClassName='w-2.5'
                            rightIconClassName='w-2.5'
                        >
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                </div>
                {/* Primary w/ icon End*/}

                {/* Primary Icon */}
                <div className='flex flex-col gap-2 items-center'>
                    <div>
                        <IconButton
                            variant='primary'
                            size='lg'
                            icon={BsHeartFill}
                            iconClassName='w-3.5'
                        ></IconButton>
                    </div>
                    <div>
                        <IconButton
                            variant='primary'
                            size='base'
                            icon={BsHeartFill}
                            iconClassName='w-3'
                        ></IconButton>
                    </div>
                    <div>
                        <IconButton
                            variant='primary'
                            size='sm'
                            icon={BsHeartFill}
                            iconClassName='w-2.5'
                        ></IconButton>
                    </div>
                </div>
                {/* Primary Icon End*/}

                {/* Success w/o icon */}
                <div className='flex flex-col gap-2'>
                    <div>
                        <Button variant='success' size='lg'>
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button variant='success' size='base'>
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button variant='success' size='sm'>
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                </div>
                {/* Success w/o icon End*/}

                {/* Success w/ icon */}
                <div className='flex flex-col gap-2'>
                    <div>
                        <Button
                            variant='success'
                            size='lg'
                            leftIcon={BsHeartFill}
                            rightIcon={BsHeartFill}
                            leftIconClassName='w-3.5'
                            rightIconClassName='w-3.5'
                        >
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button
                            variant='success'
                            size='base'
                            leftIcon={BsHeartFill}
                            rightIcon={BsHeartFill}
                            leftIconClassName='w-3'
                            rightIconClassName='w-3'
                        >
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button
                            variant='success'
                            size='sm'
                            leftIcon={BsHeartFill}
                            rightIcon={BsHeartFill}
                            leftIconClassName='w-2.5'
                            rightIconClassName='w-2.5'
                        >
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                </div>
                {/* Success w/ icon End*/}

                {/* Success Icon */}
                <div className='flex flex-col gap-2 items-center'>
                    <div>
                        <IconButton
                            variant='success'
                            size='lg'
                            icon={BsHeartFill}
                            iconClassName='w-3.5'
                        ></IconButton>
                    </div>
                    <div>
                        <IconButton
                            variant='success'
                            size='base'
                            icon={BsHeartFill}
                            iconClassName='w-3'
                        ></IconButton>
                    </div>
                    <div>
                        <IconButton
                            variant='success'
                            size='sm'
                            icon={BsHeartFill}
                            iconClassName='w-2.5'
                        ></IconButton>
                    </div>
                </div>
                {/* Success Icon End*/}

                {/* Danger w/o icon */}
                <div className='flex flex-col gap-2'>
                    <div>
                        <Button variant='danger' size='lg'>
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button variant='danger' size='base'>
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button variant='danger' size='sm'>
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                </div>
                {/* Danger w/o icon End*/}

                {/* Danger w/ icon */}
                <div className='flex flex-col gap-2'>
                    <div>
                        <Button
                            variant='danger'
                            size='lg'
                            leftIcon={BsHeartFill}
                            rightIcon={BsHeartFill}
                            leftIconClassName='w-3.5'
                            rightIconClassName='w-3.5'
                        >
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button
                            variant='danger'
                            size='base'
                            leftIcon={BsHeartFill}
                            rightIcon={BsHeartFill}
                            leftIconClassName='w-3'
                            rightIconClassName='w-3'
                        >
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button
                            variant='danger'
                            size='sm'
                            leftIcon={BsHeartFill}
                            rightIcon={BsHeartFill}
                            leftIconClassName='w-2.5'
                            rightIconClassName='w-2.5'
                        >
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                </div>
                {/* Danger w/ icon End*/}

                {/* Danger Icon */}
                <div className='flex flex-col gap-2 items-center'>
                    <div>
                        <IconButton
                            variant='danger'
                            size='lg'
                            icon={BsHeartFill}
                            iconClassName='w-3.5'
                        ></IconButton>
                    </div>
                    <div>
                        <IconButton
                            variant='danger'
                            size='base'
                            icon={BsHeartFill}
                            iconClassName='w-3'
                        ></IconButton>
                    </div>
                    <div>
                        <IconButton
                            variant='danger'
                            size='sm'
                            icon={BsHeartFill}
                            iconClassName='w-2.5'
                        ></IconButton>
                    </div>
                </div>
                {/* Danger Icon End*/}

                {/* Warning w/o icon */}
                <div className='flex flex-col gap-2'>
                    <div>
                        <Button variant='warning' size='lg'>
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button variant='warning' size='base'>
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button variant='warning' size='sm'>
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                </div>
                {/* Warning w/o icon End*/}

                {/* Warning w/ icon */}
                <div className='flex flex-col gap-2'>
                    <div>
                        <Button
                            variant='warning'
                            size='lg'
                            leftIcon={BsHeartFill}
                            rightIcon={BsHeartFill}
                            leftIconClassName='w-3.5'
                            rightIconClassName='w-3.5'
                        >
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button
                            variant='warning'
                            size='base'
                            leftIcon={BsHeartFill}
                            rightIcon={BsHeartFill}
                            leftIconClassName='w-3'
                            rightIconClassName='w-3'
                        >
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button
                            variant='warning'
                            size='sm'
                            leftIcon={BsHeartFill}
                            rightIcon={BsHeartFill}
                            leftIconClassName='w-2.5'
                            rightIconClassName='w-2.5'
                        >
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                </div>
                {/* Warning w/ icon End*/}

                {/* Warning Icon */}
                <div className='flex flex-col gap-2 items-center'>
                    <div>
                        <IconButton
                            variant='warning'
                            size='lg'
                            icon={BsHeartFill}
                            iconClassName='w-3.5'
                        ></IconButton>
                    </div>
                    <div>
                        <IconButton
                            variant='warning'
                            size='base'
                            icon={BsHeartFill}
                            iconClassName='w-3'
                        ></IconButton>
                    </div>
                    <div>
                        <IconButton
                            variant='warning'
                            size='sm'
                            icon={BsHeartFill}
                            iconClassName='w-2.5'
                        ></IconButton>
                    </div>
                </div>
                {/* Warning Icon End*/}
            </div>

            <h1 className='mt-10'>
                Outline/Secondary
            </h1>

            <div className='flex flex-row gap-2 mt-4 mb-4'>
                {/* Primary w/o icon */}
                <div className='flex flex-col gap-2'>
                    <div>
                        <Button variant='outline-primary' size='lg'>
                            <h1 >
                                outline button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button variant='outline-primary' size='base'>
                            <h1 >
                                outline button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button variant='outline-primary' size='sm'>
                            <h1 >
                                outline button
                            </h1>
                        </Button>
                    </div>
                </div>
                {/* Primary w/o icon End*/}

                {/* Primary w/ icon */}
                <div className='flex flex-col gap-2'>
                    <div>
                        <Button
                            variant='outline-primary'
                            size='lg'
                            leftIcon={BsPlusLg}
                            rightIcon={BsArrowRightShort}
                            leftIconClassName='w-3.5 text-primary'
                        >
                            <h1 >
                                outline button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button
                            variant='outline-primary'
                            size='base'
                            leftIcon={BsPlusLg}
                            rightIcon={BsArrowRightShort}
                            leftIconClassName='w-3 text-primary'
                        >
                            <h1 >
                                outline button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button
                            variant='outline-primary'
                            size='sm'
                            leftIcon={BsPlusLg}
                            rightIcon={BsArrowRightShort}
                            leftIconClassName='w-2.5 text-primary'
                        >
                            <h1 >
                                outline button
                            </h1>
                        </Button>
                    </div>
                </div>
                {/* Primary w/ icon End*/}

                {/* Success w/o icon */}
                <div className='flex flex-col gap-2'>
                    <div>
                        <Button variant='outline-success' size='lg'>
                            <h1 >
                                outline button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button variant='outline-success' size='base'>
                            <h1 >
                                outline button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button variant='outline-success' size='sm'>
                            <h1 >
                                outline button
                            </h1>
                        </Button>
                    </div>
                </div>
                {/* Success w/o icon End*/}

                {/* Success w/ icon */}
                <div className='flex flex-col gap-2'>
                    <div>
                        <Button
                            variant='outline-success'
                            size='lg'
                            leftIcon={BsPlusLg}
                            rightIcon={BsArrowRightShort}
                            leftIconClassName='w-3.5'
                            rightIconClassName='w-3.5'
                        >
                            <h1 >
                                outline button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button
                            variant='outline-success'
                            size='base'
                            leftIcon={BsPlusLg}
                            rightIcon={BsArrowRightShort}
                            leftIconClassName='w-3'
                            rightIconClassName='w-3'
                        >
                            <h1 >
                                outline button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button
                            variant='outline-success'
                            size='sm'
                            leftIcon={BsPlusLg}
                            rightIcon={BsArrowRightShort}
                            leftIconClassName='w-2.5'
                            rightIconClassName='w-2.5'
                        >
                            <h1 >
                                outline button
                            </h1>
                        </Button>
                    </div>
                </div>
                {/* Success w/ icon End*/}

                {/* Danger w/o icon */}
                <div className='flex flex-col gap-2'>
                    <div>
                        <Button variant='outline-danger' size='lg'>
                            <h1 >
                                outline button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button variant='outline-danger' size='base'>
                            <h1 >
                                outline button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button variant='outline-danger' size='sm'>
                            <h1 >
                                outline button
                            </h1>
                        </Button>
                    </div>
                </div>
                {/* Danger w/o icon End*/}

                {/* Danger w/ icon */}
                <div className='flex flex-col gap-2'>
                    <div>
                        <Button
                            variant='outline-danger'
                            size='lg'
                            leftIcon={BsPlusLg}
                            rightIcon={BsArrowRightShort}
                            leftIconClassName='w-3.5'
                            rightIconClassName='w-3.5'
                        >
                            <h1 >
                                outline button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button
                            variant='outline-danger'
                            size='base'
                            leftIcon={BsPlusLg}
                            rightIcon={BsArrowRightShort}
                            leftIconClassName='w-3'
                            rightIconClassName='w-3'
                        >
                            <h1 >
                                outline button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button
                            variant='outline-danger'
                            size='sm'
                            leftIcon={BsPlusLg}
                            rightIcon={BsArrowRightShort}
                            leftIconClassName='w-2.5'
                            rightIconClassName='w-2.5'
                        >
                            <h1 >
                                outline button
                            </h1>
                        </Button>
                    </div>
                </div>
                {/* Danger w/ icon End*/}
            </div>

            <h1 className='mt-10'>
                Others
            </h1>

            <div className='flex flex-row gap-2 mt-4 mb-4'>
                {/* Primary w/o icon */}
                <div className='flex flex-col gap-2'>
                    <div>
                        <Button variant='primary' size='lg' disabled>
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button variant='primary' size='base' disabled>
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button variant='primary' size='sm' disabled>
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                </div>
                {/* Primary w/o icon End*/}

                {/* Primary w/ icon */}
                <div className='flex flex-col gap-2'>
                    <div>
                        <Button
                            variant='primary'
                            size='lg'
                            leftIcon={BsHeartFill}
                            rightIcon={BsHeartFill}
                            leftIconClassName='w-3.5'
                            rightIconClassName='w-3.5'
                            disabled
                        >
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button
                            variant='primary'
                            size='base'
                            leftIcon={BsHeartFill}
                            rightIcon={BsHeartFill}
                            leftIconClassName='w-3'
                            rightIconClassName='w-3'
                            disabled
                        >
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button
                            variant='primary'
                            size='sm'
                            leftIcon={BsHeartFill}
                            rightIcon={BsHeartFill}
                            leftIconClassName='w-2.5'
                            rightIconClassName='w-2.5'
                            disabled
                        >
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                </div>
                {/* Primary w/ icon End*/}

                {/* Primary Icon */}
                <div className='flex flex-col gap-2 items-center'>
                    <div>
                        <IconButton
                            variant='primary'
                            size='lg'
                            icon={BsHeartFill}
                            iconClassName='w-3.5'
                            disabled
                        ></IconButton>
                    </div>
                    <div>
                        <IconButton
                            variant='primary'
                            size='base'
                            icon={BsHeartFill}
                            iconClassName='w-3'
                            disabled
                        ></IconButton>
                    </div>
                    <div>
                        <IconButton
                            variant='primary'
                            size='sm'
                            icon={BsHeartFill}
                            iconClassName='w-2.5'
                            disabled
                        ></IconButton>
                    </div>
                </div>
                {/* Primary Icon End*/}

                {/* Success w/o icon */}
                <div className='flex flex-col gap-2'>
                    <div>
                        <Button variant='success' size='lg' disabled>
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button variant='success' size='base' disabled>
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button variant='success' size='sm' disabled>
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                </div>
                {/* Success w/o icon End*/}

                {/* Success w/ icon */}
                <div className='flex flex-col gap-2'>
                    <div>
                        <Button
                            variant='success'
                            size='lg'
                            leftIcon={BsHeartFill}
                            rightIcon={BsHeartFill}
                            leftIconClassName='w-3.5'
                            rightIconClassName='w-3.5'
                            disabled
                        >
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button
                            variant='success'
                            size='base'
                            leftIcon={BsHeartFill}
                            rightIcon={BsHeartFill}
                            leftIconClassName='w-3'
                            rightIconClassName='w-3'
                            disabled
                        >
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button
                            variant='success'
                            size='sm'
                            leftIcon={BsHeartFill}
                            rightIcon={BsHeartFill}
                            leftIconClassName='w-2.5'
                            rightIconClassName='w-2.5'
                            disabled
                        >
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                </div>
                {/* Success w/ icon End*/}

                {/* Success Icon */}
                <div className='flex flex-col gap-2 items-center'>
                    <div>
                        <IconButton
                            variant='success'
                            size='lg'
                            icon={BsHeartFill}
                            iconClassName='w-3.5'
                            disabled
                        ></IconButton>
                    </div>
                    <div>
                        <IconButton
                            variant='success'
                            size='base'
                            icon={BsHeartFill}
                            iconClassName='w-3'
                            disabled
                        ></IconButton>
                    </div>
                    <div>
                        <IconButton
                            variant='success'
                            size='sm'
                            icon={BsHeartFill}
                            iconClassName='w-2.5'
                            disabled
                        ></IconButton>
                    </div>
                </div>
                {/* Success Icon End*/}

                {/* Danger w/o icon */}
                <div className='flex flex-col gap-2'>
                    <div>
                        <Button variant='danger' size='lg' disabled>
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button variant='danger' size='base' disabled>
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button variant='danger' size='sm' disabled>
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                </div>
                {/* Danger w/o icon End*/}

                {/* Danger w/ icon */}
                <div className='flex flex-col gap-2'>
                    <div>
                        <Button
                            variant='danger'
                            size='lg'
                            leftIcon={BsHeartFill}
                            rightIcon={BsHeartFill}
                            leftIconClassName='w-3.5'
                            rightIconClassName='w-3.5'
                            disabled
                        >
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button
                            variant='danger'
                            size='base'
                            leftIcon={BsHeartFill}
                            rightIcon={BsHeartFill}
                            leftIconClassName='w-3'
                            rightIconClassName='w-3'
                            disabled
                        >
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button
                            variant='danger'
                            size='sm'
                            leftIcon={BsHeartFill}
                            rightIcon={BsHeartFill}
                            leftIconClassName='w-2.5'
                            rightIconClassName='w-2.5'
                            disabled
                        >
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                </div>
                {/* Danger w/ icon End*/}

                {/* Danger Icon */}
                <div className='flex flex-col gap-2 items-center'>
                    <div>
                        <IconButton
                            variant='danger'
                            size='lg'
                            icon={BsHeartFill}
                            iconClassName='w-3.5'
                            disabled
                        ></IconButton>
                    </div>
                    <div>
                        <IconButton
                            variant='danger'
                            size='base'
                            icon={BsHeartFill}
                            iconClassName='w-3'
                            disabled
                        ></IconButton>
                    </div>
                    <div>
                        <IconButton
                            variant='danger'
                            size='sm'
                            icon={BsHeartFill}
                            iconClassName='w-2.5'
                            disabled
                        ></IconButton>
                    </div>
                </div>
                {/* Danger Icon End*/}

                {/* Warning w/o icon */}
                <div className='flex flex-col gap-2'>
                    <div>
                        <Button variant='warning' size='lg' disabled>
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button variant='warning' size='base' disabled>
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button variant='warning' size='sm' disabled>
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                </div>
                {/* Warning w/o icon End*/}

                {/* Warning w/ icon */}
                <div className='flex flex-col gap-2'>
                    <div>
                        <Button
                            variant='warning'
                            size='lg'
                            leftIcon={BsHeartFill}
                            rightIcon={BsHeartFill}
                            leftIconClassName='w-3.5'
                            rightIconClassName='w-3.5'
                            disabled
                        >
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button
                            variant='warning'
                            size='base'
                            leftIcon={BsHeartFill}
                            rightIcon={BsHeartFill}
                            leftIconClassName='w-3'
                            rightIconClassName='w-3'
                            disabled
                        >
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                    <div>
                        <Button
                            variant='warning'
                            size='sm'
                            leftIcon={BsHeartFill}
                            rightIcon={BsHeartFill}
                            leftIconClassName='w-2.5'
                            rightIconClassName='w-2.5'
                            disabled
                        >
                            <h1 >
                                Button
                            </h1>
                        </Button>
                    </div>
                </div>
                {/* Warning w/ icon End*/}

                {/* Warning Icon */}
                <div className='flex flex-col gap-2 items-center'>
                    <div>
                        <IconButton
                            variant='warning'
                            size='lg'
                            icon={BsHeartFill}
                            iconClassName='w-3.5'
                            disabled
                        ></IconButton>
                    </div>
                    <div>
                        <IconButton
                            variant='warning'
                            size='base'
                            icon={BsHeartFill}
                            iconClassName='w-3'
                            disabled
                        ></IconButton>
                    </div>
                    <div>
                        <IconButton
                            variant='warning'
                            size='sm'
                            icon={BsHeartFill}
                            iconClassName='w-2.5'
                            disabled
                        ></IconButton>
                    </div>
                </div>
                {/* Warning Icon End*/}
            </div>
        </div>
    );
}
