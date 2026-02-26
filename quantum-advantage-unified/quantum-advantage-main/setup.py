"""
DNA-Lang Setup - Build C Extensions and Install Package
========================================================
"""

from setuptools import setup, Extension
import numpy
import sys

# C Extension modules
extensions = [
    Extension(
        'dnalang.lambda_phi_ext',
        sources=['dnalang_core/lambda_phi_ext.c'],
        include_dirs=[numpy.get_include()],
        extra_compile_args=['-O3', '-march=native', '-ffast-math'],
        extra_link_args=['-lm'],  # Link math library
    ),
]

setup(
    name='dnalang',
    version='0.1.0',
    description='DNA-Lang: Quantum-Native Programming Language',
    author='DNA-Lang Project',
    author_email='devinphillipdavis@gmail.com',
    url='https://github.com/dnalang/dnalang',
    
    packages=['dnalang', 'dnalang.osiris', 'dnalang.osiris.physics'],
    package_dir={'dnalang': 'osiris'},
    
    ext_modules=extensions,
    
    install_requires=[
        'numpy>=1.20.0',
        'qiskit>=0.40.0',
        'qiskit-ibm-runtime>=0.15.0',
    ],
    
    extras_require={
        'dev': [
            'pytest>=7.0.0',
            'pytest-cov>=4.0.0',
            'black>=22.0.0',
            'mypy>=0.990',
        ],
        'hardware': [
            'qiskit-aer>=0.12.0',
        ],
    },
    
    python_requires='>=3.10',
    
    classifiers=[
        'Development Status :: 3 - Alpha',
        'Intended Audience :: Science/Research',
        'Topic :: Scientific/Engineering :: Physics',
        'Programming Language :: Python :: 3.10',
        'Programming Language :: Python :: 3.11',
        'Programming Language :: C',
    ],
)
