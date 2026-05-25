export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/algebra-trigonometry/', label: 'Algebra & Trigonometry' },
  { href: '/calculus/', label: 'Calculus' },
  { href: '/statistics/', label: 'Statistics' },
  { href: '/differential-equations/', label: 'Differential Equations' },
  { href: '/physics/', label: 'Physics' },
  { href: '/chemistry/', label: 'Chemistry' }
];

export const sections = [
  {
    id: 'algebra-trigonometry',
    title: 'Algebra & Trigonometry',
    href: '/algebra-trigonometry/',
    summary: 'Core algebra identities, trigonometric laws, logarithms, and exponent rules.',
    accent: 'pink',
    groups: [
      {
        title: 'Basic Algebra',
        formulas: [
          { name: 'Quadratic Formula', latex: 'x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}', note: 'For ax^2+bx+c=0.' },
          { name: 'Difference of Squares', latex: 'a^2-b^2=(a-b)(a+b)' },
          { name: 'Perfect Square Trinomial', latex: 'a^2\\pm2ab+b^2=(a\\pm b)^2' },
          { name: 'Sum of Cubes', latex: 'a^3+b^3=(a+b)(a^2-ab+b^2)' },
          { name: 'Difference of Cubes', latex: 'a^3-b^3=(a-b)(a^2+ab+b^2)' },
          { name: 'Arithmetic Sequence', latex: 'a_n=a_1+(n-1)d' },
          { name: 'Arithmetic Series', latex: 'S_n=\\frac{n}{2}(a_1+a_n)' },
          { name: 'Geometric Sequence', latex: 'a_n=a_1r^{n-1}' },
          { name: 'Finite Geometric Series', latex: 'S_n=a_1\\frac{1-r^n}{1-r},\\quad r\\ne1' },
          { name: 'Infinite Geometric Series', latex: 'S=\\frac{a_1}{1-r},\\quad |r|<1' }
        ]
      },
      {
        title: 'Binomial Theorem',
        formulas: [
          { name: 'Expansion', latex: '(x+y)^n=\\sum_{k=0}^{n}\\binom{n}{k}x^{n-k}y^k' },
          { name: 'Binomial Coefficient', latex: '\\binom{n}{k}=\\frac{n!}{k!(n-k)!}' },
          { name: 'Pascal Identity', latex: '\\binom{n}{k}=\\binom{n-1}{k-1}+\\binom{n-1}{k}' },
          { name: 'Binomial Sum', latex: '\\sum_{k=0}^{n}\\binom{n}{k}=2^n' }
        ]
      },
      {
        title: 'Trigonometric Functions',
        formulas: [
          { name: 'Pythagorean Identity', latex: '\\sin^2\\theta+\\cos^2\\theta=1' },
          { name: 'Tangent Identity', latex: '1+\\tan^2\\theta=\\sec^2\\theta' },
          { name: 'Law of Cosines', latex: 'c^2=a^2+b^2-2ab\\cos C' },
          { name: 'Law of Sines', latex: '\\frac{a}{\\sin A}=\\frac{b}{\\sin B}=\\frac{c}{\\sin C}' },
          { name: 'Double Angle Sine', latex: '\\sin(2x)=2\\sin x\\cos x' },
          { name: 'Double Angle Cosine', latex: '\\cos(2x)=\\cos^2x-\\sin^2x=2\\cos^2x-1=1-2\\sin^2x' },
          { name: 'Double Angle Tangent', latex: '\\tan(2x)=\\frac{2\\tan x}{1-\\tan^2x}' },
          { name: 'Half Angle Sine', latex: '\\sin^2\\frac{x}{2}=\\frac{1-\\cos x}{2}' },
          { name: 'Half Angle Cosine', latex: '\\cos^2\\frac{x}{2}=\\frac{1+\\cos x}{2}' },
          { name: 'Angle Addition', latex: '\\sin(a\\pm b)=\\sin a\\cos b\\pm\\cos a\\sin b' },
          { name: 'Cosine Addition', latex: '\\cos(a\\pm b)=\\cos a\\cos b\\mp\\sin a\\sin b' }
        ]
      },
      {
        title: 'Logarithms and Exponents',
        formulas: [
          { name: 'Product Rule', latex: '\\log_b(xy)=\\log_bx+\\log_by' },
          { name: 'Quotient Rule', latex: '\\log_b\\left(\\frac{x}{y}\\right)=\\log_bx-\\log_by' },
          { name: 'Power Rule', latex: '\\log_b(x^r)=r\\log_bx' },
          { name: 'Change of Base', latex: '\\log_bx=\\frac{\\log_ax}{\\log_ab}' },
          { name: 'Natural Log Inverse', latex: '\\ln(e^x)=x,\\quad e^{\\ln x}=x' },
          { name: 'Exponent Product', latex: 'a^ma^n=a^{m+n}' },
          { name: 'Exponent Quotient', latex: '\\frac{a^m}{a^n}=a^{m-n}' },
          { name: 'Power of a Power', latex: '(a^m)^n=a^{mn}' }
        ]
      }
    ]
  },
  {
    id: 'calculus',
    title: 'Calculus',
    href: '/calculus/',
    summary: 'High-use derivatives, integrals, and Laplace transforms for quick reference.',
    accent: 'violet',
    groups: [
      {
        title: 'Top 30 Derivatives',
        formulas: [
          { name: 'Constant', latex: '\\frac{d}{dx}c=0' },
          { name: 'Power Rule', latex: '\\frac{d}{dx}x^n=nx^{n-1}' },
          { name: 'Constant Multiple', latex: '\\frac{d}{dx}[cf(x)]=cf\\prime(x)' },
          { name: 'Sum Rule', latex: '\\frac{d}{dx}[f+g]=f\\prime+g\\prime' },
          { name: 'Product Rule', latex: '\\frac{d}{dx}[fg]=f\\prime g+fg\\prime' },
          { name: 'Quotient Rule', latex: '\\frac{d}{dx}\\left(\\frac{f}{g}\\right)=\\frac{gf\\prime-fg\\prime}{g^2}' },
          { name: 'Chain Rule', latex: '\\frac{d}{dx}f(g(x))=f\\prime(g(x))g\\prime(x)' },
          { name: 'Exponential', latex: '\\frac{d}{dx}e^x=e^x' },
          { name: 'General Exponential', latex: '\\frac{d}{dx}a^x=a^x\\ln a' },
          { name: 'Natural Log', latex: '\\frac{d}{dx}\\ln x=\\frac{1}{x}' },
          { name: 'Common Log', latex: '\\frac{d}{dx}\\log_a x=\\frac{1}{x\\ln a}' },
          { name: 'Sine', latex: '\\frac{d}{dx}\\sin x=\\cos x' },
          { name: 'Cosine', latex: '\\frac{d}{dx}\\cos x=-\\sin x' },
          { name: 'Tangent', latex: '\\frac{d}{dx}\\tan x=\\sec^2x' },
          { name: 'Cotangent', latex: '\\frac{d}{dx}\\cot x=-\\csc^2x' },
          { name: 'Secant', latex: '\\frac{d}{dx}\\sec x=\\sec x\\tan x' },
          { name: 'Cosecant', latex: '\\frac{d}{dx}\\csc x=-\\csc x\\cot x' },
          { name: 'Arcsine', latex: '\\frac{d}{dx}\\sin^{-1}x=\\frac{1}{\\sqrt{1-x^2}}' },
          { name: 'Arccosine', latex: '\\frac{d}{dx}\\cos^{-1}x=-\\frac{1}{\\sqrt{1-x^2}}' },
          { name: 'Arctangent', latex: '\\frac{d}{dx}\\tan^{-1}x=\\frac{1}{1+x^2}' },
          { name: 'Arccotangent', latex: '\\frac{d}{dx}\\cot^{-1}x=-\\frac{1}{1+x^2}' },
          { name: 'Arcsecant', latex: '\\frac{d}{dx}\\sec^{-1}x=\\frac{1}{|x|\\sqrt{x^2-1}}' },
          { name: 'Arccosecant', latex: '\\frac{d}{dx}\\csc^{-1}x=-\\frac{1}{|x|\\sqrt{x^2-1}}' },
          { name: 'Hyperbolic Sine', latex: '\\frac{d}{dx}\\sinh x=\\cosh x' },
          { name: 'Hyperbolic Cosine', latex: '\\frac{d}{dx}\\cosh x=\\sinh x' },
          { name: 'Hyperbolic Tangent', latex: '\\frac{d}{dx}\\tanh x=\\operatorname{sech}^2x' },
          { name: 'Log Absolute', latex: '\\frac{d}{dx}\\ln|u|=\\frac{u\\prime}{u}' },
          { name: 'Implicit Differentiation', latex: '\\frac{dy}{dx}=-\\frac{F_x}{F_y}\\quad \\text{for }F(x,y)=0' },
          { name: 'Parametric Derivative', latex: '\\frac{dy}{dx}=\\frac{dy/dt}{dx/dt}' },
          { name: 'Inverse Function', latex: '(f^{-1})\\prime(x)=\\frac{1}{f\\prime(f^{-1}(x))}' }
        ]
      },
      {
        title: 'Top 40 Integrals',
        formulas: [
          { name: 'Power Integral', latex: '\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}+C,\\quad n\\ne-1' },
          { name: 'Reciprocal', latex: '\\int \\frac{1}{x}\\,dx=\\ln|x|+C' },
          { name: 'Exponential', latex: '\\int e^x\\,dx=e^x+C' },
          { name: 'General Exponential', latex: '\\int a^x\\,dx=\\frac{a^x}{\\ln a}+C' },
          { name: 'Sine', latex: '\\int \\sin x\\,dx=-\\cos x+C' },
          { name: 'Cosine', latex: '\\int \\cos x\\,dx=\\sin x+C' },
          { name: 'Secant Squared', latex: '\\int \\sec^2x\\,dx=\\tan x+C' },
          { name: 'Cosecant Squared', latex: '\\int \\csc^2x\\,dx=-\\cot x+C' },
          { name: 'Secant Tangent', latex: '\\int \\sec x\\tan x\\,dx=\\sec x+C' },
          { name: 'Cosecant Cotangent', latex: '\\int \\csc x\\cot x\\,dx=-\\csc x+C' },
          { name: 'Tangent', latex: '\\int \\tan x\\,dx=-\\ln|\\cos x|+C' },
          { name: 'Cotangent', latex: '\\int \\cot x\\,dx=\\ln|\\sin x|+C' },
          { name: 'Secant', latex: '\\int \\sec x\\,dx=\\ln|\\sec x+\\tan x|+C' },
          { name: 'Cosecant', latex: '\\int \\csc x\\,dx=\\ln|\\csc x-\\cot x|+C' },
          { name: 'Arctangent Form', latex: '\\int \\frac{dx}{a^2+x^2}=\\frac{1}{a}\\tan^{-1}\\frac{x}{a}+C' },
          { name: 'Arcsine Form', latex: '\\int \\frac{dx}{\\sqrt{a^2-x^2}}=\\sin^{-1}\\frac{x}{a}+C' },
          { name: 'Log Radical Form', latex: '\\int \\frac{dx}{\\sqrt{x^2+a^2}}=\\ln|x+\\sqrt{x^2+a^2}|+C' },
          { name: 'Hyperbolic Form', latex: '\\int \\frac{dx}{\\sqrt{x^2-a^2}}=\\ln|x+\\sqrt{x^2-a^2}|+C' },
          { name: 'Inverse Square Root', latex: '\\int \\sqrt{a^2-x^2}\\,dx=\\frac{x}{2}\\sqrt{a^2-x^2}+\\frac{a^2}{2}\\sin^{-1}\\frac{x}{a}+C' },
          { name: 'Gaussian', latex: '\\int_{-\\infty}^{\\infty}e^{-x^2}\\,dx=\\sqrt{\\pi}' },
          { name: 'Integration by Parts', latex: '\\int u\\,dv=uv-\\int v\\,du' },
          { name: 'Substitution', latex: '\\int f(g(x))g\\prime(x)\\,dx=\\int f(u)\\,du' },
          { name: 'Even Function', latex: '\\int_{-a}^{a}f(x)\\,dx=2\\int_0^a f(x)\\,dx' },
          { name: 'Odd Function', latex: '\\int_{-a}^{a}f(x)\\,dx=0' },
          { name: 'Mean Value', latex: 'f_{avg}=\\frac{1}{b-a}\\int_a^b f(x)\\,dx' },
          { name: 'Area Between Curves', latex: 'A=\\int_a^b[f(x)-g(x)]\\,dx' },
          { name: 'Disk Method', latex: 'V=\\pi\\int_a^b[R(x)]^2\\,dx' },
          { name: 'Washer Method', latex: 'V=\\pi\\int_a^b(R^2-r^2)\\,dx' },
          { name: 'Shell Method', latex: 'V=2\\pi\\int_a^b radius\\cdot height\\,dx' },
          { name: 'Arc Length', latex: 'L=\\int_a^b\\sqrt{1+[f\\prime(x)]^2}\\,dx' },
          { name: 'Surface Area', latex: 'S=2\\pi\\int_a^b f(x)\\sqrt{1+[f\\prime(x)]^2}\\,dx' },
          { name: 'Improper Integral', latex: '\\int_a^{\\infty}f(x)\\,dx=\\lim_{b\\to\\infty}\\int_a^b f(x)\\,dx' },
          { name: 'Beta Function', latex: 'B(x,y)=\\int_0^1t^{x-1}(1-t)^{y-1}\\,dt' },
          { name: 'Gamma Function', latex: '\\Gamma(n)=\\int_0^{\\infty}t^{n-1}e^{-t}\\,dt' },
          { name: 'Sine Squared', latex: '\\int \\sin^2x\\,dx=\\frac{x}{2}-\\frac{\\sin2x}{4}+C' },
          { name: 'Cosine Squared', latex: '\\int \\cos^2x\\,dx=\\frac{x}{2}+\\frac{\\sin2x}{4}+C' },
          { name: 'Sinh', latex: '\\int \\sinh x\\,dx=\\cosh x+C' },
          { name: 'Cosh', latex: '\\int \\cosh x\\,dx=\\sinh x+C' },
          { name: 'Log Integral', latex: '\\int \\ln x\\,dx=x\\ln x-x+C' },
          { name: 'Arctangent Integral', latex: '\\int \\tan^{-1}x\\,dx=x\\tan^{-1}x-\\frac{1}{2}\\ln(1+x^2)+C' }
        ]
      },
      {
        title: 'Top 20 Laplace Transforms',
        formulas: [
          { name: 'Constant', latex: '\\mathcal{L}\\{1\\}=\\frac{1}{s}' },
          { name: 'Power', latex: '\\mathcal{L}\\{t^n\\}=\\frac{n!}{s^{n+1}}' },
          { name: 'Exponential', latex: '\\mathcal{L}\\{e^{at}\\}=\\frac{1}{s-a}' },
          { name: 'Sine', latex: '\\mathcal{L}\\{\\sin at\\}=\\frac{a}{s^2+a^2}' },
          { name: 'Cosine', latex: '\\mathcal{L}\\{\\cos at\\}=\\frac{s}{s^2+a^2}' },
          { name: 'Sinh', latex: '\\mathcal{L}\\{\\sinh at\\}=\\frac{a}{s^2-a^2}' },
          { name: 'Cosh', latex: '\\mathcal{L}\\{\\cosh at\\}=\\frac{s}{s^2-a^2}' },
          { name: 'First Shift', latex: '\\mathcal{L}\\{e^{at}f(t)\\}=F(s-a)' },
          { name: 'Derivative', latex: '\\mathcal{L}\\{f\\prime(t)\\}=sF(s)-f(0)' },
          { name: 'Second Derivative', latex: '\\mathcal{L}\\{f\\prime\\prime(t)\\}=s^2F(s)-sf(0)-f\\prime(0)' },
          { name: 'Integral', latex: '\\mathcal{L}\\left\\{\\int_0^t f(u)\\,du\\right\\}=\\frac{F(s)}{s}' },
          { name: 'Multiplication by t', latex: '\\mathcal{L}\\{tf(t)\\}=-F\\prime(s)' },
          { name: 'Unit Step', latex: '\\mathcal{L}\\{u(t-a)\\}=\\frac{e^{-as}}{s}' },
          { name: 'Second Shift', latex: '\\mathcal{L}\\{u(t-a)f(t-a)\\}=e^{-as}F(s)' },
          { name: 'Delta', latex: '\\mathcal{L}\\{\\delta(t-a)\\}=e^{-as}' },
          { name: 'Convolution', latex: '\\mathcal{L}\\{(f*g)(t)\\}=F(s)G(s)' },
          { name: 'Periodic Function', latex: '\\mathcal{L}\\{f(t)\\}=\\frac{\\int_0^T e^{-st}f(t)\\,dt}{1-e^{-sT}}' },
          { name: 'Final Value', latex: '\\lim_{t\\to\\infty}f(t)=\\lim_{s\\to0}sF(s)' },
          { name: 'Initial Value', latex: '\\lim_{t\\to0^+}f(t)=\\lim_{s\\to\\infty}sF(s)' },
          { name: 'Division by t', latex: '\\mathcal{L}\\left\\{\\frac{f(t)}{t}\\right\\}=\\int_s^{\\infty}F(u)\\,du' }
        ]
      }
    ]
  },
  {
    id: 'statistics',
    title: 'Statistics',
    href: '/statistics/',
    summary: 'Probability, counting, distributions, correlation, regression, and hypothesis testing.',
    accent: 'blue',
    groups: [
      {
        title: 'Probability and Counting',
        formulas: [
          { name: 'Complement', latex: 'P(A^c)=1-P(A)' },
          { name: 'Addition Law', latex: 'P(A\\cup B)=P(A)+P(B)-P(A\\cap B)' },
          { name: 'Conditional Probability', latex: 'P(A|B)=\\frac{P(A\\cap B)}{P(B)}' },
          { name: 'Multiplication Law', latex: 'P(A\\cap B)=P(A|B)P(B)' },
          { name: 'Independence', latex: 'P(A\\cap B)=P(A)P(B)' },
          { name: 'Bayes Theorem', latex: 'P(A_i|B)=\\frac{P(B|A_i)P(A_i)}{\\sum_jP(B|A_j)P(A_j)}' },
          { name: 'Permutation', latex: 'P(n,r)=\\frac{n!}{(n-r)!}' },
          { name: 'Combination', latex: 'C(n,r)=\\binom{n}{r}=\\frac{n!}{r!(n-r)!}' },
          { name: 'Expected Value', latex: 'E[X]=\\sum_x xP(X=x)' },
          { name: 'Continuous Expected Value', latex: 'E[X]=\\int_{-\\infty}^{\\infty}xf(x)\\,dx' },
          { name: 'Variance', latex: '\\operatorname{Var}(X)=E[X^2]-\\mu^2' }
        ]
      },
      {
        title: 'Discrete Distributions',
        formulas: [
          { name: 'Bernoulli', latex: 'P(X=x)=p^x(1-p)^{1-x},\\quad x\\in\\{0,1\\}' },
          { name: 'Binomial', latex: 'P(X=x)=\\binom{n}{x}p^x(1-p)^{n-x}' },
          { name: 'Geometric', latex: 'P(X=x)=(1-p)^{x-1}p' },
          { name: 'Negative Binomial', latex: 'P(X=x)=\\binom{x-1}{r-1}p^r(1-p)^{x-r}' },
          { name: 'Hypergeometric', latex: 'P(X=x)=\\frac{\\binom{K}{x}\\binom{N-K}{n-x}}{\\binom{N}{n}}' },
          { name: 'Poisson', latex: 'P(X=x)=e^{-\\lambda}\\frac{\\lambda^x}{x!}' },
          { name: 'Discrete Uniform', latex: 'P(X=x)=\\frac{1}{n}' }
        ]
      },
      {
        title: 'Continuous Distributions',
        formulas: [
          { name: 'Normal', latex: 'f(x)=\\frac{1}{\\sigma\\sqrt{2\\pi}}e^{-\\frac{1}{2}\\left(\\frac{x-\\mu}{\\sigma}\\right)^2}' },
          { name: 'Standard Normal', latex: 'Z=\\frac{X-\\mu}{\\sigma}' },
          { name: 'Uniform', latex: 'f(x)=\\frac{1}{b-a},\\quad a\\le x\\le b' },
          { name: 'Exponential', latex: 'f(x)=\\lambda e^{-\\lambda x},\\quad x\\ge0' },
          { name: 'Gamma', latex: 'f(x)=\\frac{\\lambda^\\alpha}{\\Gamma(\\alpha)}x^{\\alpha-1}e^{-\\lambda x}' },
          { name: 'Chi-Square', latex: 'X\\sim\\chi^2_k=\\Gamma\\left(\\frac{k}{2},\\frac{1}{2}\\right)' },
          { name: 'Student t', latex: 'T=\\frac{Z}{\\sqrt{V/\\nu}}' },
          { name: 'F Distribution', latex: 'F=\\frac{U/d_1}{V/d_2}' },
          { name: 'Beta', latex: 'f(x)=\\frac{x^{\\alpha-1}(1-x)^{\\beta-1}}{B(\\alpha,\\beta)}' }
        ]
      },
      {
        title: 'Correlation and Regression',
        formulas: [
          {
            name: 'Correlation Coefficient',
            latex: 'r=\\frac{\\sum_{i=1}^{n}(x_i-\\bar{x})(y_i-\\bar{y})}{\\sqrt{\\sum_{i=1}^{n}(x_i-\\bar{x})^2\\sum_{i=1}^{n}(y_i-\\bar{y})^2}}',
            note: 'Pearson sample correlation coefficient.'
          },
          {
            name: 'Linear Least-Squares Line',
            latex: '\\hat{y}=a+bx,\\quad b=\\frac{\\sum_{i=1}^{n}(x_i-\\bar{x})(y_i-\\bar{y})}{\\sum_{i=1}^{n}(x_i-\\bar{x})^2},\\quad a=\\bar{y}-b\\bar{x}',
            note: 'Also called the regression line or line of best fit.'
          }
        ]
      },
      {
        title: 'Hypothesis Testing',
        formulas: [
          { name: 'One-Sample z Test', latex: 'z=\\frac{\\bar{x}-\\mu_0}{\\sigma/\\sqrt{n}}' },
          { name: 'One-Sample t Test', latex: 't=\\frac{\\bar{x}-\\mu_0}{s/\\sqrt{n}}' },
          { name: 'Two-Sample t Test', latex: 't=\\frac{\\bar{x}_1-\\bar{x}_2}{\\sqrt{s_1^2/n_1+s_2^2/n_2}}' },
          { name: 'Paired t Test', latex: 't=\\frac{\\bar{d}}{s_d/\\sqrt{n}}' },
          { name: 'Proportion z Test', latex: 'z=\\frac{\\hat{p}-p_0}{\\sqrt{p_0(1-p_0)/n}}' },
          { name: 'Two-Proportion z Test', latex: 'z=\\frac{\\hat{p}_1-\\hat{p}_2}{\\sqrt{\\hat{p}(1-\\hat{p})(1/n_1+1/n_2)}}' },
          { name: 'Chi-Square Goodness of Fit', latex: '\\chi^2=\\sum\\frac{(O-E)^2}{E}' },
          { name: 'Chi-Square Independence', latex: '\\chi^2=\\sum_i\\sum_j\\frac{(O_{ij}-E_{ij})^2}{E_{ij}}' },
          { name: 'ANOVA F Statistic', latex: 'F=\\frac{MS_{between}}{MS_{within}}' },
          { name: 'p-value Rule', latex: 'p\\le\\alpha\\Rightarrow \\text{reject }H_0' }
        ]
      }
    ]
  },
  {
    id: 'differential-equations',
    title: 'Differential Equations',
    href: '/differential-equations/',
    summary: 'Common types of differential equations, solution patterns, and model examples.',
    accent: 'green',
    groups: [
      {
        title: 'First-Order Equations',
        formulas: [
          {
            name: 'Separable Equation',
            latex: '\\frac{dy}{dx}=g(x)h(y)\\Rightarrow \\int \\frac{1}{h(y)}\\,dy=\\int g(x)\\,dx+C',
            note: 'Separate variables, integrate both sides, then solve for y when possible. Example: y\\prime=ky gives exponential growth or decay.'
          },
          {
            name: 'Linear First-Order Equation',
            latex: 'y\\prime+P(x)y=Q(x),\\quad \\mu(x)=e^{\\int P(x)\\,dx},\\quad (\\mu y)\\prime=\\mu Q',
            note: 'The integrating factor turns the left side into one product derivative.'
          },
          {
            name: 'Exact Equation',
            latex: 'M(x,y)\\,dx+N(x,y)\\,dy=0,\\quad M_y=N_x',
            note: 'Find a potential function F with F_x=M and F_y=N; the implicit solution is F(x,y)=C.'
          },
          {
            name: 'Logistic Growth',
            latex: '\\frac{dP}{dt}=rP\\left(1-\\frac{P}{K}\\right),\\quad P(t)=\\frac{K}{1+Ae^{-rt}}',
            note: 'Population grows nearly exponentially when small and levels off near the carrying capacity K.'
          },
          {
            name: 'Newton Cooling',
            latex: '\\frac{dT}{dt}=-k(T-T_s),\\quad T(t)=T_s+(T_0-T_s)e^{-kt}',
            note: 'The temperature difference from the surroundings decays exponentially.'
          }
        ]
      },
      {
        title: 'Second-Order Linear Equations',
        formulas: [
          {
            name: 'Homogeneous Constant Coefficients',
            latex: 'ay\\prime\\prime+by\\prime+cy=0,\\quad ar^2+br+c=0',
            note: 'Solve the characteristic equation. Real roots give exponentials; complex roots give damped sine and cosine terms.'
          },
          {
            name: 'Distinct Real Roots',
            latex: 'r_1\\ne r_2\\Rightarrow y=C_1e^{r_1x}+C_2e^{r_2x}',
            note: 'Use when the characteristic equation has two different real roots.'
          },
          {
            name: 'Repeated Root',
            latex: 'r_1=r_2=r\\Rightarrow y=(C_1+C_2x)e^{rx}',
            note: 'The extra factor x creates a second independent solution.'
          },
          {
            name: 'Complex Roots',
            latex: 'r=\\alpha\\pm i\\beta\\Rightarrow y=e^{\\alpha x}(C_1\\cos\\beta x+C_2\\sin\\beta x)',
            note: 'This form models oscillations, with growth or damping controlled by alpha.'
          },
          {
            name: 'Forced Equation Structure',
            latex: 'ay\\prime\\prime+by\\prime+cy=f(x),\\quad y=y_h+y_p',
            note: 'The general solution is the homogeneous solution plus one particular solution.'
          }
        ]
      },
      {
        title: 'Systems and Phase Ideas',
        formulas: [
          {
            name: 'Linear System',
            latex: '\\mathbf{x}\\prime=A\\mathbf{x},\\quad \\mathbf{x}(t)=c_1e^{\\lambda_1t}\\mathbf{v}_1+c_2e^{\\lambda_2t}\\mathbf{v}_2',
            note: 'Eigenvalues and eigenvectors describe the main directions and rates of motion.'
          },
          {
            name: 'Equilibrium Point',
            latex: '\\mathbf{x}\\prime=\\mathbf{f}(\\mathbf{x}),\\quad \\mathbf{f}(\\mathbf{x}_0)=\\mathbf{0}',
            note: 'Solutions can approach, leave, or orbit around equilibrium points depending on local behavior.'
          },
          {
            name: 'Slope Field Idea',
            latex: 'y\\prime=f(x,y)',
            note: 'At each point, draw a small segment with slope f(x,y); solution curves follow the local directions.'
          },
          {
            name: 'Initial Value Problem',
            latex: 'y\\prime=f(x,y),\\quad y(x_0)=y_0',
            note: 'A differential equation plus starting data usually selects one solution curve.'
          }
        ]
      },
      {
        title: 'Transforms and Series',
        formulas: [
          {
            name: 'Laplace Method',
            latex: '\\mathcal{L}\\{y\\prime\\}=sY(s)-y(0),\\quad \\mathcal{L}\\{y\\prime\\prime\\}=s^2Y(s)-sy(0)-y\\prime(0)',
            note: 'Transforms convert many initial value problems into algebraic equations in s.'
          },
          {
            name: 'Power Series Solution',
            latex: 'y=\\sum_{n=0}^{\\infty}a_n(x-x_0)^n',
            note: 'Substitute the series into the equation and match coefficients to get recurrence relations.'
          },
          {
            name: 'Euler Method',
            latex: 'y_{n+1}=y_n+h f(x_n,y_n)',
            note: 'A first numerical approximation: move from the current point using the current slope.'
          },
          {
            name: 'Runge-Kutta 4',
            latex: 'y_{n+1}=y_n+\\frac{h}{6}(k_1+2k_2+2k_3+k_4)',
            note: 'A more accurate one-step numerical method that averages several slope estimates.'
          }
        ]
      }
    ]
  },
  {
    id: 'physics',
    title: 'Physics: Equations and Formulas',
    href: '/physics/',
    summary: 'Motion, forces, fields, heat, waves, optics, and modern physics formulas.',
    accent: 'amber',
    diagrams: [
      {
        id: 'projectile-sketch',
        title: 'Projectile Motion',
        caption: 'The curve shows constant horizontal velocity while gravity accelerates the object downward.',
        sketch: 'projectile'
      },
      {
        id: 'wave-sketch',
        title: 'Wave and Field Snapshot',
        caption: 'A sinusoidal wave carries energy; electromagnetic waves have oscillating electric and magnetic fields.',
        sketch: 'wave'
      }
    ],
    groups: [
      {
        title: 'Laws of Motion and Applications',
        formulas: [
          { name: 'Newton Second Law', latex: '\\sum \\mathbf{F}=m\\mathbf{a}', note: 'Net force causes acceleration; forces balance when acceleration is zero.' },
          { name: 'Constant Acceleration', latex: 'v=v_0+at,\\quad x=x_0+v_0t+\\frac{1}{2}at^2', note: 'Use these only when acceleration is constant.' },
          { name: 'Projectile Range', latex: 'R=\\frac{v_0^2\\sin(2\\theta)}{g}', note: 'Applies when launch and landing heights are equal and air resistance is neglected.' },
          { name: 'Centripetal Acceleration', latex: 'a_c=\\frac{v^2}{r}=\\omega^2r', note: 'Circular motion needs inward acceleration even at constant speed.' },
          { name: 'Work and Kinetic Energy', latex: 'W=\\Delta K=\\frac{1}{2}mv_f^2-\\frac{1}{2}mv_i^2' },
          { name: 'Momentum Conservation', latex: 'm_1\\mathbf{v}_{1i}+m_2\\mathbf{v}_{2i}=m_1\\mathbf{v}_{1f}+m_2\\mathbf{v}_{2f}', note: 'Total momentum is conserved for an isolated system.' },
          { name: 'Universal Gravitation', latex: 'F=G\\frac{m_1m_2}{r^2}', note: 'Gravity is attractive and acts along the line between the masses.' }
        ]
      },
      {
        title: 'Electricity and Magnetism',
        formulas: [
          { name: 'Coulomb Law', latex: 'F=k\\frac{|q_1q_2|}{r^2}', note: 'Like charges repel and unlike charges attract.' },
          { name: 'Electric Field', latex: '\\mathbf{E}=\\frac{\\mathbf{F}}{q},\\quad E=k\\frac{|Q|}{r^2}' },
          { name: 'Electric Potential', latex: 'V=\\frac{U}{q},\\quad \\Delta U=q\\Delta V' },
          { name: 'Ohm Law', latex: 'V=IR', note: 'Resistance relates voltage and current for ohmic materials.' },
          { name: 'Electric Power', latex: 'P=IV=I^2R=\\frac{V^2}{R}' },
          { name: 'Magnetic Force on Charge', latex: '\\mathbf{F}=q\\mathbf{v}\\times\\mathbf{B},\\quad F=qvB\\sin\\theta' },
          { name: 'Faraday Law', latex: '\\mathcal{E}=-\\frac{d\\Phi_B}{dt}', note: 'Changing magnetic flux induces an emf; the minus sign indicates opposition to the change.' },
          { name: 'Maxwell Wave Speed', latex: 'c=\\frac{1}{\\sqrt{\\mu_0\\epsilon_0}}' }
        ]
      },
      {
        title: 'Thermodynamics',
        formulas: [
          { name: 'Ideal Gas Law', latex: 'PV=nRT=Nk_BT' },
          { name: 'First Law', latex: '\\Delta U=Q-W', note: 'Heat added to a system increases internal energy or becomes work done by the system.' },
          { name: 'Heat Transfer', latex: 'Q=mc\\Delta T' },
          { name: 'Latent Heat', latex: 'Q=mL', note: 'Phase changes can absorb or release heat with no temperature change.' },
          { name: 'Heat Engine Efficiency', latex: 'e=\\frac{W}{Q_h}=1-\\frac{Q_c}{Q_h}' },
          { name: 'Carnot Efficiency', latex: 'e_{max}=1-\\frac{T_c}{T_h}', note: 'Temperatures must be in kelvin.' },
          { name: 'Entropy Change', latex: '\\Delta S=\\int \\frac{dQ_{rev}}{T}' }
        ]
      },
      {
        title: 'Waves, Oscillation, and Optics',
        formulas: [
          { name: 'Wave Speed', latex: 'v=f\\lambda' },
          { name: 'Simple Harmonic Motion', latex: 'x(t)=A\\cos(\\omega t+\\phi),\\quad a=-\\omega^2x' },
          { name: 'Mass-Spring Period', latex: 'T=2\\pi\\sqrt{\\frac{m}{k}}' },
          { name: 'Pendulum Period', latex: 'T=2\\pi\\sqrt{\\frac{L}{g}}', note: 'Small-angle approximation.' },
          { name: 'Sound Intensity Level', latex: '\\beta=10\\log_{10}\\left(\\frac{I}{I_0}\\right)' },
          { name: 'Snell Law', latex: 'n_1\\sin\\theta_1=n_2\\sin\\theta_2' },
          { name: 'Thin Lens and Mirror', latex: '\\frac{1}{f}=\\frac{1}{d_o}+\\frac{1}{d_i},\\quad m=-\\frac{d_i}{d_o}' },
          { name: 'Double-Slit Interference', latex: 'd\\sin\\theta=m\\lambda' }
        ]
      },
      {
        title: 'Modern Physics',
        formulas: [
          { name: 'Photon Energy', latex: 'E=hf=\\frac{hc}{\\lambda}' },
          { name: 'de Broglie Wavelength', latex: '\\lambda=\\frac{h}{p}' },
          { name: 'Mass-Energy Equivalence', latex: 'E=mc^2' },
          { name: 'Relativistic Factor', latex: '\\gamma=\\frac{1}{\\sqrt{1-v^2/c^2}}' },
          { name: 'Time Dilation', latex: '\\Delta t=\\gamma\\Delta t_0' },
          { name: 'Relativistic Energy-Momentum', latex: 'E^2=(pc)^2+(mc^2)^2' },
          { name: 'Reaction Q Value', latex: 'Q=(m_{initial}-m_{final})c^2', note: 'Positive Q releases energy; negative Q requires input energy.' },
          { name: 'Radioactive Decay', latex: 'N(t)=N_0e^{-\\lambda t},\\quad t_{1/2}=\\frac{\\ln2}{\\lambda}' },
          { name: 'Hydrogen Energy Levels', latex: 'E_n=-\\frac{13.6\\text{ eV}}{n^2}' },
          { name: 'Uncertainty Principle', latex: '\\Delta x\\Delta p\\ge\\frac{\\hbar}{2}' }
        ]
      }
    ]
  },
  {
    id: 'chemistry',
    title: 'Chemistry: Equations and Formulas',
    href: '/chemistry/',
    summary: 'Conversions, atomic structure, bonding, reactions, stoichiometry, acids, organic patterns, and environmental chemistry.',
    accent: 'teal',
    diagrams: [
      {
        id: 'atom-sketch',
        title: 'Atomic Structure',
        caption: 'Electrons occupy shells and orbitals around a compact nucleus of protons and neutrons.',
        sketch: 'atom'
      },
      {
        id: 'ph-sketch',
        title: 'pH Scale',
        caption: 'Each pH unit changes hydrogen ion concentration by a factor of 10.',
        sketch: 'ph'
      }
    ],
    groups: [
      {
        title: 'Unit Conversion Table',
        formulas: [
          { name: 'Metric Prefixes', latex: '1\\text{ km}=10^3\\text{ m},\\quad 1\\text{ cm}=10^{-2}\\text{ m},\\quad 1\\text{ mm}=10^{-3}\\text{ m}' },
          { name: 'Microscale Prefixes', latex: '1\\,\\mu\\text{m}=10^{-6}\\text{ m},\\quad 1\\text{ nm}=10^{-9}\\text{ m}' },
          { name: 'Volume', latex: '1\\text{ L}=1000\\text{ mL}=10^{-3}\\text{ m}^3' },
          { name: 'Mass', latex: '1\\text{ kg}=1000\\text{ g},\\quad 1\\text{ g}=1000\\text{ mg}' },
          { name: 'Temperature', latex: 'K=^\\circ C+273.15,\\quad ^\\circ F=\\frac{9}{5}(^\\circ C)+32' },
          { name: 'Energy', latex: '1\\text{ cal}=4.184\\text{ J},\\quad 1\\text{ kJ}=1000\\text{ J}' },
          { name: 'Pressure', latex: '1\\text{ atm}=101.325\\text{ kPa}=760\\text{ torr}' }
        ]
      },
      {
        title: 'Atomic Structure',
        formulas: [
          { name: 'Mass Number', latex: 'A=Z+N', note: 'A is protons plus neutrons; Z is the atomic number.' },
          { name: 'Average Atomic Mass', latex: '\\bar{m}=\\sum_i f_i m_i', note: 'Use fractional isotope abundances.' },
          { name: 'Bohr Energy', latex: 'E_n=-\\frac{2.18\\times10^{-18}\\text{ J}}{n^2}' },
          { name: 'Photon Relation', latex: '\\Delta E=hf=\\frac{hc}{\\lambda}' },
          { name: 'Quantum Numbers', latex: 'n=1,2,3,...;\\quad \\ell=0,...,n-1;\\quad m_\\ell=-\\ell,...,+\\ell' },
          { name: 'Electron Capacity', latex: '\\text{shell capacity}=2n^2' }
        ]
      },
      {
        title: 'Chemical Bonding',
        formulas: [
          { name: 'Formal Charge', latex: 'FC=V-(N+\\frac{B}{2})', note: 'V is valence electrons, N is nonbonding electrons, and B is bonding electrons.' },
          { name: 'Coulombic Attraction', latex: 'E\\propto \\frac{q_1q_2}{r}' },
          { name: 'Bond Order', latex: '\\text{bond order}=\\frac{\\text{bonding e}^- -\\text{antibonding e}^-}{2}' },
          { name: 'Electronegativity Difference', latex: '\\Delta EN=|EN_A-EN_B|', note: 'Large differences usually mean more ionic character.' },
          { name: 'Lattice Energy Trend', latex: '|E|\\uparrow \\text{ as } |q_1q_2|\\uparrow \\text{ and } r\\downarrow' }
        ]
      },
      {
        title: 'Chemical Reactions',
        formulas: [
          { name: 'Reaction Rate', latex: '\\text{rate}=-\\frac{1}{a}\\frac{d[A]}{dt}=\\frac{1}{b}\\frac{d[B]}{dt}' },
          { name: 'Equilibrium Constant', latex: 'K_c=\\frac{[C]^c[D]^d}{[A]^a[B]^b}' },
          { name: 'Reaction Quotient', latex: 'Q=\\frac{[C]^c[D]^d}{[A]^a[B]^b}', note: 'Compare Q with K to predict the direction of shift.' },
          { name: 'Arrhenius Equation', latex: 'k=Ae^{-E_a/(RT)}' },
          { name: 'Gibbs Free Energy', latex: '\\Delta G=\\Delta H-T\\Delta S' },
          { name: 'Free Energy and Equilibrium', latex: '\\Delta G^\\circ=-RT\\ln K' }
        ]
      },
      {
        title: 'Stoichiometry',
        formulas: [
          { name: 'Moles from Mass', latex: 'n=\\frac{m}{M}' },
          { name: 'Molarity', latex: 'M=\\frac{n}{V_{L}}' },
          { name: 'Dilution', latex: 'M_1V_1=M_2V_2' },
          { name: 'Percent Yield', latex: '\\%\\text{ yield}=\\frac{\\text{actual yield}}{\\text{theoretical yield}}\\times100\\%' },
          { name: 'Limiting Reactant', latex: '\\text{product moles}=\\text{reactant moles}\\times\\frac{\\text{coefficient product}}{\\text{coefficient reactant}}' },
          { name: 'Ideal Gas Stoichiometry', latex: 'PV=nRT' },
          { name: 'Empirical Formula', latex: '\\text{moles of each element}\\rightarrow \\text{divide by smallest}\\rightarrow \\text{whole-number ratio}' }
        ]
      },
      {
        title: 'Acids and Bases',
        formulas: [
          { name: 'pH and pOH', latex: 'pH=-\\log[H_3O^+],\\quad pOH=-\\log[OH^-],\\quad pH+pOH=14.00', note: 'The 14.00 sum applies to water at 25 C.' },
          { name: 'Water Ion Product', latex: 'K_w=[H_3O^+][OH^-]=1.0\\times10^{-14}\\text{ at }25^\\circ\\text{C}' },
          { name: 'Acid Dissociation', latex: 'K_a=\\frac{[H_3O^+][A^-]}{[HA]}' },
          { name: 'Base Dissociation', latex: 'K_b=\\frac{[BH^+][OH^-]}{[B]}' },
          { name: 'Henderson-Hasselbalch', latex: 'pH=pK_a+\\log\\left(\\frac{[A^-]}{[HA]}\\right)' },
          { name: 'Titration Equivalence', latex: 'n_{acid}=n_{base}\\text{ after coefficient adjustment}' }
        ]
      },
      {
        title: 'Organic Chemistry',
        formulas: [
          { name: 'Degree of Unsaturation', latex: 'DU=\\frac{2C+2+N-H-X}{2}', note: 'Halogens count like H; oxygen and sulfur do not affect DU.' },
          { name: 'Combustion Pattern', latex: 'C_xH_yO_z+O_2\\rightarrow CO_2+H_2O' },
          { name: 'Alcohol Oxidation', latex: '1^\\circ\\text{ alcohol}\\rightarrow\\text{ aldehyde}\\rightarrow\\text{ carboxylic acid}' },
          { name: 'Esterification', latex: '\\text{carboxylic acid}+\\text{alcohol}\\rightleftharpoons\\text{ester}+H_2O' },
          { name: 'Markovnikov Addition', latex: 'H-X+\\text{alkene}\\rightarrow H\\text{ adds to carbon with more H atoms}', note: 'Useful rule for many hydrohalogenation reactions.' },
          { name: 'Nucleophilic Substitution', latex: '\\text{Nu}^-+R-X\\rightarrow R-\\text{Nu}+X^-', note: 'A nucleophile replaces a leaving group.' }
        ]
      },
      {
        title: 'Environmental Chemistry',
        formulas: [
          { name: 'Concentration ppm', latex: 'ppm=\\frac{\\text{mass solute}}{\\text{mass solution}}\\times10^6' },
          { name: 'Concentration ppb', latex: 'ppb=\\frac{\\text{mass solute}}{\\text{mass solution}}\\times10^9' },
          { name: 'Henry Law', latex: 'C=k_HP', note: 'Gas solubility in a liquid is proportional to gas pressure above the liquid.' },
          { name: 'Carbonate Buffer', latex: 'CO_2+H_2O\\rightleftharpoons H_2CO_3\\rightleftharpoons HCO_3^-+H^+\\rightleftharpoons CO_3^{2-}+2H^+' },
          { name: 'First-Order Pollutant Decay', latex: 'C(t)=C_0e^{-kt}' },
          { name: 'Beer-Lambert Law', latex: 'A=\\epsilon bc', note: 'Absorbance can be used to estimate concentration in water or air samples.' }
        ]
      }
    ]
  }
];

export const allFormulaRecords = sections.flatMap((section) =>
  section.groups.flatMap((group) =>
    group.formulas.map((formula) => ({
      section: section.title,
      sectionHref: section.href,
      group: group.title,
      ...formula
    }))
  )
);
